'use client';
// import Image from 'next/image';
// import styles from './page.module.css';
import { Container } from '@mui/material';
import CustomTabs from './components/customTabs';

export default function Home() {
  return (
    <main>
      <Container>
        <CustomTabs />
      </Container>
    </main>
  );
}
