import Container from '@mui/material/Container';

import LeagueTables from '../components/Tables/leagueTables';
import CustomTabs from '../components/customTabs';
import { Box } from '@mui/material';
async function getStageStanding() {
  const res = await fetch(
    `https://competition.tl.prod.c0d1um.io/thaileague/api/stage-standing-public/?tournament=175`,
    { cache: 'no-store' }
  );
  return res.json();
}
export default async function Tables() {
  const data = await getStageStanding();
  // const matches = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  return (
    <>
      <Container maxWidth='lg'>
        <CustomTabs />
      </Container>
      <Box
        sx={{
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          backgroundImage:
            'linear-gradient(137.27deg, #F90606 0.85%, #B40606 91.08%, #500404 150.26%)',
        }}
      >
        <Container maxWidth='lg'>
          <h1>Tables</h1>
        </Container>
      </Box>
      <Container sx={{ marginTop: '40px' }} maxWidth='lg'>
        <LeagueTables data={data} />
      </Container>
    </>
  );
}
