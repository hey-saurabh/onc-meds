'use client'
import { useRouter } from "next/router";
import styles from "./heroSection.module.scss";
import React from 'react'

const HeroSection = () => {
  const router = useRouter();
  
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`pageContainer ${styles.container}`}>
        <div className={`${styles.heroContentText}`}>
            <div className={`${styles.title}`}>ONC Meds</div>
            <div className={`${styles.subTitle}`}>OncMeds is your one-stop shop for all things related to medicinal plants in India that have potential to fight cancer! This resource is packed with information about these plants, what medicinal properties they have, and how they might be used in cancer treatments. Whether you're a researcher, doctor, or just curious about plant-based options for cancer care, OncMeds can be your guide.</div>
            <div className={`${styles.subsubTitle}`}>Explore our comprehensive resource on Indian medicinal plants with potential benefits for cancer patients. We delve into both traditional Ayurvedic wisdom and the latest scientific findings, offering a one-stop shop for valuable insights. <br/></div>
        </div>
        <div className={`${styles.heroContentCta}`}>
            <div className={`${styles.button}`}>
                <button className="button button-primary" onClick={() => router.push("/dashboard")}>Know More!</button>
            </div>
            <div className={`${styles.ctaText}`}>
            Ready to unlock the power of Indian medicinal plants in cancer treatment? Dive into our database, explore our resources, and let OncMeds be your trusted companion on the path to healing. Start your journey today and embrace the natural wonders that await you.
            </div>
        </div>
        
      </div>  
      
    </div>
  )
}

export default HeroSection