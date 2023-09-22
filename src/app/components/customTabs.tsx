'use client';
import { Tabs, Container, Tab } from '@mui/material';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const CustomTabs = () => {
  const router = useRouter();
  const tab = usePathname();
  //   const pathname = usePathname();
  //   console.log(pathname);
  return (
    <Tabs value={tab} textColor='secondary' indicatorColor='secondary'>
      <Tab
        value='/'
        label='Home'
        onClick={() => {
          router.push('/');
        }}
      ></Tab>
      <Tab
        value='/tables'
        label='Tables'
        onClick={() => {
          router.push('/tables');
        }}
      ></Tab>
    </Tabs>
  );
};

export default CustomTabs;
