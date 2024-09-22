'use client'
import { Button } from '@mui/material';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

const drawerWidth = 240;

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };


  return (
   <>
       <div className="d-flex flex-row">
            <Button onClick={handleDrawer} className='col-1'><DehazeIcon color='action'/></Button>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
        <Container className='d-flex flex-column gap-5'>
          <Button onClick={handleDrawer} className='justify-content-end mt-5'><DehazeIcon color='action'/></Button>
          <div className='d-flex flex-column text-center gap-5'>
            <Link className='nav-link' href={'/'}>Home</Link>
            <Link className='nav-link' href={'/project'}>Project</Link>
            <Link className='nav-link' href={'/cv'}>My CV</Link>
          </div>
        </Container>
      </Drawer>
            <div className='my-3 text-center col-7'>
              <svg width="250" height="50" viewBox="0 0 49 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 1L12.5 9L0.5 17" stroke="black"/>
                  <line x1="0.5" y1="3" x2="0.5" y2="15" stroke="black"/>
                  <line x1="5.13868" y1="5.79199" x2="8.13867" y2="7.79199" stroke="black" stroke-width="0.5"/>
                  <line x1="8.13868" y1="10.208" x2="5.13867" y2="12.208" stroke="black" stroke-width="0.5"/>
                  <line x1="2.25" y1="5" x2="2.25" y2="13" stroke="black" stroke-width="0.5"/>
                  <path d="M16.95 13V6.87H14.24V6H20.55V6.87H17.85V13H16.95ZM21.2388 13L19.6988 8H20.5588L21.9588 12.51L23.3188 8H23.5088L24.8588 12.51L26.2788 8H27.1088L25.5688 13H24.7988L23.4188 8.4L22.0387 13H21.2388ZM28.2901 13V8H29.0901V13H28.2901ZM28.6401 7.29L28.1801 5.55H29.2101L28.7401 7.29H28.6401ZM31.0147 13V8H31.8147V9.57C31.9414 9.06333 32.178 8.66 32.5247 8.36C32.8714 8.05333 33.278 7.9 33.7447 7.9C34.1647 7.9 34.528 7.99667 34.8347 8.19C35.148 8.38333 35.3847 8.66 35.5447 9.02C35.7114 9.37333 35.7947 9.79333 35.7947 10.28V13H34.9947V10.39C34.9947 9.85667 34.8514 9.43333 34.5647 9.12C34.2847 8.80667 33.898 8.65 33.4047 8.65C33.1114 8.65 32.8414 8.72667 32.5947 8.88C32.3547 9.03333 32.1647 9.24333 32.0247 9.51C31.8847 9.77667 31.8147 10.07 31.8147 10.39V13H31.0147ZM39.5163 13.12C38.8229 13.12 38.2429 12.96 37.7763 12.64C37.3163 12.32 37.0529 11.8633 36.9862 11.27H37.8063C37.8663 11.6633 38.0529 11.96 38.3663 12.16C38.6796 12.3533 39.0529 12.45 39.4863 12.45C39.6996 12.45 39.9129 12.42 40.1263 12.36C40.3396 12.3 40.5196 12.2 40.6663 12.06C40.8129 11.92 40.8863 11.7433 40.8863 11.53C40.8863 11.33 40.8263 11.17 40.7063 11.05C40.5929 10.93 40.4363 10.84 40.2363 10.78C40.0363 10.72 39.7629 10.6633 39.4163 10.61C39.3763 10.6033 39.3363 10.5967 39.2962 10.59C39.2563 10.5833 39.2129 10.5767 39.1663 10.57C38.7196 10.5033 38.3529 10.43 38.0663 10.35C37.7863 10.2633 37.5629 10.14 37.3963 9.98C37.2363 9.82 37.1563 9.6 37.1563 9.32C37.1563 9.00667 37.2529 8.74333 37.4463 8.53C37.6396 8.31 37.8929 8.14667 38.2063 8.04C38.5263 7.93333 38.8796 7.88 39.2663 7.88C39.9329 7.88 40.4796 8.04 40.9063 8.36C41.3329 8.67333 41.5729 9.12667 41.6263 9.72H40.8363C40.7896 9.33333 40.6229 9.04333 40.3363 8.85C40.0496 8.65667 39.7029 8.56 39.2962 8.56C38.9429 8.56 38.6296 8.64 38.3563 8.8C38.0896 8.95333 37.9563 9.19 37.9563 9.51C37.9563 9.68333 38.0096 9.83 38.1163 9.95C38.2229 10.0633 38.3729 10.1533 38.5663 10.22C38.7596 10.28 39.0029 10.3367 39.2962 10.39C39.3496 10.3967 39.3996 10.4033 39.4463 10.41C39.4929 10.4167 39.5429 10.4233 39.5962 10.43C39.6229 10.4367 39.6463 10.44 39.6663 10.44C39.6863 10.44 39.7096 10.4433 39.7363 10.45C40.1629 10.5167 40.5096 10.5933 40.7763 10.68C41.0496 10.7667 41.2629 10.8967 41.4163 11.07C41.5763 11.2367 41.6562 11.4567 41.6562 11.73C41.6562 12.0367 41.5529 12.2967 41.3463 12.51C41.1396 12.7167 40.8729 12.87 40.5463 12.97C40.2263 13.07 39.8829 13.12 39.5163 13.12ZM45.0555 13V6.87H42.3455V6H48.6555V6.87H45.9555V13H45.0555Z" fill="black"/>
              </svg>
                  <h1>CCS Project Exhibition</h1>
            </div>
            <Stack className="d-flex flex-row my-5" gap={5}>
              <AccountCircleIcon/>
              <MailIcon color="action" />
              <NotificationsIcon/>
            </Stack>
        </div>

   </>
  );
}
