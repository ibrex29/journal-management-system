'use client';

import * as React from 'react';
import { Box, Typography, Divider, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import IndexingSlider from './IndexingSlider';

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.secondary.main,
}));

const Content = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
}));

const PublicationCharges = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: '#f5f5f5',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const Highlight = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.secondary.main,
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff',
  boxShadow: theme.shadows[1],
}));

const InfoIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const BulletList = styled('ul')(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

const BulletItem = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export default function AuthorGuidelines(): React.JSX.Element {
  return (
    <Paper sx={{ p: 4 }}>
      <Section>
        <Title variant="h4">Author Guidelines</Title>
        <Content variant="body1">
          <InfoBox>
            <InfoIcon>
              <DescriptionIcon fontSize="large" />
            </InfoIcon>
            <Box>
              <Typography variant="body1">
                Manuscript submissions are received through the online submission platform: <a href="https://www.slujst.com.ng/submission/" target="_blank" rel="noopener noreferrer">https://www.slujst.com.ng/submission/</a>. New authors are required to register (if new to the platform) or log onto the platform before making their submission. See the sample paper format and author’s guide for manuscript preparation: Template for the Journal can also be downloaded on the website under the Manuscript Template. Please refer to our information pack for any further help accessing/using the journal portal.
              </Typography>
            </Box>
          </InfoBox>
          Submissions must be original, not yet published, and not submitted to or under review by any journal or publication outlet. All Manuscripts are double-blind peer-reviewed and if found suitable, published in the next available issue and according to the subject matter as research paper, Review paper, or technical note. The evaluation of manuscripts will be based on:
          <BulletList>
            <BulletItem>Underlying methodological soundness and rigor</BulletItem>
            <BulletItem>Innovation of the work</BulletItem>
            <BulletItem>The significance of the results and the quality of the reporting</BulletItem>
          </BulletList>
        </Content>
      </Section>

      <Section>
        <SubTitle variant="h6">
          <CodeIcon sx={{ mr: 1 }} /> Preparation of the Manuscript
        </SubTitle>
        <Content variant="body1">
          Manuscript should be written in English Language and typed in 12 point font size using Times New Roman in double spacing on A4 paper. A margin of 25 mm should be left at the sides. The paper should not exceed twenty (20) pages, including figures and tables. The manuscript should be organized under the following headings:
          <br /><br />
          <strong>Title Page</strong><br />
          The title page should contain only the title of the article, authors’ contact details such as names, institutional affiliations, corresponding author’s email address and phone number. This should be uploaded as a supplementary document on the Author’s portal. Please note that the article title should not exceed fifteen (15) words.
          <br /><br />
          <strong>Abstract Page</strong><br />
          Page 1 of the manuscript should contain the title of the article, the abstract, five or six keywords, and may include the Introduction Section, etc. However, it must NOT contain name(s), and address(es) of author(s), and e-mail addresses and telephone number of the corresponding author. This information will be supplied on the online submission platform in addition to the uploaded title page above. The abstract should not normally exceed 250 words in 12 point font size.
          <br /><br />
          <strong>Keywords</strong><br />
          Five or six relevant keywords should be provided on the title page.
          <br /><br />
          <strong>Symbols, Abbreviations, and Units</strong><br />
          Symbols and abbreviations should be defined where first mentioned. If the symbols are many, a “Notation” defining the symbols must be included between the abstract and Introduction. SI units should be used.
          <br /><br />
          <strong>Introduction</strong><br />
          This should include the background to the study, a brief review of literature and clearly-stated objectives.
          <br /><br />
          <strong>Theoretical Analysis</strong><br />
          The mathematical principles or theories used should be included as appropriate.
          <br /><br />
          <strong>Materials and Methods/Methodology/Experimental Procedure</strong><br />
          This section should include apparatus and equipment setup, work materials, design, experimental methods, as applicable.
          <br /><br />
          <strong>Results and Discussion</strong><br />
          Results could be presented in descriptive, tabular, or graphical form. Information presented in tables should not be repeated as figures. Discussion should be focused on the interpretation of experimental findings.
          <br /><br />
          <strong>Conclusion</strong><br />
          The conclusion should be a brief summary of findings. It should clearly state the contributions, relevance of the findings, and recommendations, as appropriate.
          <br /><br />
          <strong>References</strong><br />
          The APA system (alphabetical listing) of referencing should be used in the body of the manuscript while only essential references must be cited and listed.
        </Content>
      </Section>

      <PublicationCharges>
        <SubTitle variant="h6">
          <PaymentIcon sx={{ mr: 1 }} /> Publication Charges
        </SubTitle>
        <Content variant="body1">
          <Highlight>Article Publication Charges and Copy of Print Journal</Highlight>
          <br /><br />
          <InfoBox>
            <InfoIcon>
              <PaymentIcon fontSize="large" />
            </InfoIcon>
            <Box>
              <Typography variant="body1">
                <strong>A processing fee of <Highlight>₦4,000.00</Highlight> should be paid while sending the manuscript and a publication charge of <Highlight>₦10,000.00</Highlight> shall be charged after acceptance.</strong>
              </Typography>
            </Box>
          </InfoBox>

          <InfoBox>
            <InfoIcon>
              <AccountBalanceIcon fontSize="large" />
            </InfoIcon>
            <Box>
              <Typography variant="body1">
                <strong>Account Details:</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Account Name:</strong> SLU JOURNAL OF SCIENCE AND TECHNOLOGY
              </Typography>
              <Typography variant="body1">
                <strong>Name of Bank:</strong> JAIZ Bank Plc
              </Typography>
              <Typography variant="body1">
                <strong>Account Number:</strong> <Highlight>0014798508</Highlight>
              </Typography>
            </Box>
          </InfoBox>

          <InfoBox>
            <InfoIcon>
              <EmailIcon fontSize="large" />
            </InfoIcon>
            <Box>
              <Typography variant="body1">
                A scanned copy of the teller should be uploaded as a supplementary file along with the manuscript in the author’s portal and/or sent electronically as an attachment to our e-mail address: <a href="mailto:me_jst@slu.edu.ng">me_jst@slu.edu.ng</a>, <a href="mailto:bus_jst@slu.edu.ng">bus_jst@slu.edu.ng</a>, and <a href="mailto:tea_jst@slu.edu.ng">tea_jst@slu.edu.ng</a>.
              </Typography>
              <Typography variant="body1">
                To encourage foreign authors, the processing fee is waived for any submission which does not have any Nigerian author.
              </Typography>
            </Box>
          </InfoBox>
        </Content>
      </PublicationCharges>

      <Section>
        <SubTitle variant="h6">
          <ListAltIcon sx={{ mr: 1 }} /> Suggested Reviewers
        </SubTitle>
        <Content variant="body1">
          A list of at least three suggested reviewers should be provided with their current institutional affiliations as well as email addresses. However, please note that the Managing Editor reserves the right to determine the appropriate reviewers to review your manuscript. This request is simply to populate our database of reviewers in diverse fields.
        </Content>
      </Section>

      <Section>
        <SubTitle variant="h6">
          <InsertChartIcon sx={{ mr: 1 }} /> Indexing
        </SubTitle>
        <Content variant="body1">
          SLUJST is currently indexed in:
          <BulletList>
            <BulletItem>Google Scholar</BulletItem>
            <BulletItem>CrossRef</BulletItem>
            <BulletItem>Sule Lamido University Libraries</BulletItem>
            <BulletItem>ResearchGate</BulletItem>
            <BulletItem>Journals for Free</BulletItem>
            <BulletItem>ACADEMIA</BulletItem>
          </BulletList>
          <IndexingSlider />
        </Content>
      </Section>
    </Paper>
  );
}
