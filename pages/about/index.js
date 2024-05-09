import React, { useState } from 'react'
import styles from "./about.module.scss";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Ayurvedic, FDA, Unani } from '../../utils/misc';
import TableComponent from '@/components/TableComponent';
import { Col, Drawer, Input, Row, Select } from 'antd/lib';
import { Card } from 'antd/lib';
import Link from 'next/link';

const AboutPage = ({ isDark, setIsDark, toggleDark }) => {
  const [searchValue, setSearchValue] = useState("");
  const [database, setDatabase] = useState(null);
  const [criteria, setCriteria] = useState(null);

  return (
    <div className={`pageContainer ${styles.dashboardContainer}`}>
      
      <div className={`${styles.dashboardTextContainer} ${isDark ? "text-white" : ""}`}>
        <p className='text-center font-medium text-lg'>OncMeds is meticulously curated to illuminate the vast potential of Indian medicinal plants in the fight against cancer. It delves into their historical use and explores their possibilities as complementary or alternative approaches to conventional treatments.</p>
        <ul>
          <li>
            <div>
              <img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" />
              Public Data, Empowered Users:
            </div>
            <p>
              Our unwavering commitment lies in providing accurate and in-depth information. We leverage a vast network of publicly available resources and research articles, selecting and presenting data to empower users with comprehensive knowledge.
            </p>
          </li>
          <li>
            <div>
              <img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" />India's Botanical Bounty:
            </div>
            <p>
              OncMeds is a high-quality repository on India's rich botanical heritage in cancer care. Our extensive repository has 320+ plant species with potential anticancer properties. Explore three primary classifications:
            </p>
            <ol>
              <li>Ayurvedic Plants: Discover the wisdom of ancient Indian medicine.</li>
              <li>Unani Medications: Delve into the legacy of Unani herbal remedies.</li>
              <li>FDA-Approved Plant-Based Drugs: Unearth conventional medicines with a natural origin.</li>
            </ol>
          </li>
          <li>
            <div>
              <img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" />
              Unveiling the Plant's Secrets:
            </div>
            <p>
              Each plant profile in OncMeds offers a wealth of details, including:
              Active Phytochemicals: Understand the potential powerhouses within the plant.
              Medicinal Plant Parts: Identify the specific portions used for treatment.
              Geographic Distribution: Discover where these plants naturally thrive in India.
              Scientific References: Explore the available research, keeping in mind the information is derived from public sources.
            </p>
          </li>
          <li>
            <div>
              <img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" /> 
              A Disclaimer for Transparency:
            </div>
            <p>
            It's crucial to understand that OncMeds presents information for educational purposes only. The data is solely derived from publicly available sources, and the database publisher holds no responsibility for its accuracy or completeness. Inclusion of a plant does not constitute endorsement of its effectiveness against cancer. Further scientific validation and clinical trials are necessary.
Join us on this journey of exploration!  Let's unlock the hidden treasures of nature's pharmacy, fostering a future where traditional wisdom and modern science converge to offer new pathways to healing and hope.
            </p>
          </li>
        </ul>
      </div>
      
      <video autoPlay loop muted className={styles.video_bg}>
        <source src="/vid/vid_2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.imageOverlay} />

      <div className={styles.imageOverlay2} />
    </div>
  )
}

export default AboutPage