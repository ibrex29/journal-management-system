'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
  useTheme,
  InputAdornment,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DescriptionIcon from '@mui/icons-material/Description';
import PaymentIcon from '@mui/icons-material/Payment';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Define the type for form values
interface FormValues {
  title: string;
  abstract: string;
  keywords: string;
  suggestedReviewer: string;
  manuscriptFile: File | null;
  proofOfPaymentFile: File | null;
}

// Validation Schema
const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  abstract: yup.string().required('Abstract is required'),
  keywords: yup.string().required('Keywords are required'),
  suggestedReviewer: yup.string().required('Suggested reviewer is required'),
  manuscriptFile: yup.mixed().required('Manuscript file is required'),
  proofOfPaymentFile: yup.mixed().required('Proof of payment file is required'),
});

export function ManuscriptSubmission(): React.JSX.Element {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      title: '',
      abstract: '',
      keywords: '',
      suggestedReviewer: '',
      manuscriptFile: null,
      proofOfPaymentFile: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('abstract', values.abstract);
        formData.append('keywords', values.keywords);
        formData.append('suggestedReviewer', values.suggestedReviewer);
        if (values.manuscriptFile) formData.append('manuscriptFile', values.manuscriptFile);
        if (values.proofOfPaymentFile) formData.append('proofOfPaymentFile', values.proofOfPaymentFile);

        const response = await fetch('http://localhost:5000/api/manuscripts', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setSuccess(true);
          // Clear the form after successful submission
          formik.resetForm();
        } else {
          const result = await response.json();
          setError(result.message || 'Failed to submit manuscript');
        }
      } catch (error) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
        mx: 'auto',
        p: 4,
        gap: 3,
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: theme.palette.background.default,
      }}
      noValidate
    >
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
        Submit Manuscript
      </Typography>

      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('title')}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title ? formik.errors.title : 'Enter the title of your manuscript.'}
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Abstract"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        {...formik.getFieldProps('abstract')}
        error={formik.touched.abstract && Boolean(formik.errors.abstract)}
        helperText={formik.touched.abstract && formik.errors.abstract ? formik.errors.abstract : 'Provide a brief summary of your manuscript.'}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Keywords"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('keywords')}
        error={formik.touched.keywords && Boolean(formik.errors.keywords)}
        helperText={formik.touched.keywords && formik.errors.keywords ? formik.errors.keywords : 'List keywords related to your manuscript, separated by commas.'}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Suggested Reviewer"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('suggestedReviewer')}
        error={formik.touched.suggestedReviewer && Boolean(formik.errors.suggestedReviewer)}
        helperText={formik.touched.suggestedReviewer && formik.errors.suggestedReviewer ? formik.errors.suggestedReviewer : 'Suggest a reviewer for your manuscript.'}
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="contained"
          component="label"
          color="primary"
          startIcon={<UploadFileIcon />}
          sx={{ mt: 2 }}
        >
          Upload Manuscript
          <input
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files) formik.setFieldValue('manuscriptFile', e.target.files[0]);
            }}
          />
        </Button>
        {formik.values.manuscriptFile && <Typography variant="body2">{formik.values.manuscriptFile.name}</Typography>}
        {formik.touched.manuscriptFile && formik.errors.manuscriptFile && (
          <Typography variant="body2" color="error">
            {formik.errors.manuscriptFile}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="contained"
          component="label"
          color="primary"
          startIcon={<PaymentIcon />}
          sx={{ mt: 2 }}
        >
          Upload Proof of Payment
          <input
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files) formik.setFieldValue('proofOfPaymentFile', e.target.files[0]);
            }}
          />
        </Button>
        {formik.values.proofOfPaymentFile && <Typography variant="body2">{formik.values.proofOfPaymentFile.name}</Typography>}
        {formik.touched.proofOfPaymentFile && formik.errors.proofOfPaymentFile && (
          <Typography variant="body2" color="error">
            {formik.errors.proofOfPaymentFile}
          </Typography>
        )}
      </Box>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        sx={{ mt: 4, py: 1.5, fontSize: '1rem', fontWeight: 'bold' }}
      >
        {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit Manuscript'}
      </Button>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Manuscript submitted successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
