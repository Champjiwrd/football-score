import Container from '@mui/material/Container';

import LeagueTables from '../components/Tables/leagueTables';
import CustomTabs from '../components/customTabs';

async function getStageStanding() {
  const res = await fetch(
    `https://competition.tl.prod.c0d1um.io/thaileague/api/stage-standing-public/?tournament=175`
  );
  return res.json();
}
export default async function Tables() {
  const data = await getStageStanding();
  // const matches = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  return (
    <Container maxWidth='lg'>
      <CustomTabs />
      <h1>Tables</h1>
      <LeagueTables data={data} />
    </Container>
  );
}
