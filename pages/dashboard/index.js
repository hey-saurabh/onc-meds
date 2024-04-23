import React, { useState } from 'react'
import styles from "./dashboard.module.scss";
import { Breadcrumb, BreadcrumbItem, Input } from 'reactstrap';
import Select from 'react-select'
import { Ayurvedic, FDA } from './misc';
import TableComponent from '@/components/TableComponent';

const Dashboard = ({ isDark, setIsDark, toggleDark }) => {
  const [searchValue, setSearchValue] = useState("");
  const [database, setDatabase] = useState("");
  const [criteria, setCriteria] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [data, setData] = useState([]);


  const searchHandler = async () => {
    setIsSearch(true);
    // try {
    //   const response = await fetch(url + endpoint, obj)
    //   .then((res) => res.json())
    //   .then((response) => response)
    //   .catch((error) => error);

    //   if(response.meta.code == 200) {
    //     setData(response.data);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  }

  if(!isSearch) {
    return (
      <div className={`pageContainer ${styles.dashboardContainer}`}>
        <div className={styles.breadcrumbContainer}>
        <Breadcrumb listTag="div" className={isDark ? "text-lg font-medium text-white" : "text-lg font-medium"}>
          <BreadcrumbItem
            href="/"
            tag="a"
          >
            Home
          </BreadcrumbItem>
          <BreadcrumbItem
            href="/dashboard"
            tag="span"
          >
            Dashboard
          </BreadcrumbItem>
        </Breadcrumb>
        </div>
        <div className={`${styles.dashboardTextContainer} ${isDark ? "text-white" : ""}`}>
          <p className='text-center font-medium text-lg'>Looking for natural approaches to support cancer treatment? Our Medicinal Plant Database is your one-stop shop!
          <br/>Explore a world of healing plants...</p>
          <ul>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' /> Search by scientific or common names to find the perfect plant.</li>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' /> Dive deep and discover the chemical makeup and anti-cancer compounds in each plant.</li>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' /> See it to believe it! Immerse yourself in a library of beautiful plant images.</li>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' /> Unravel the science: Delve into curated research articles for in-depth knowledge.</li>
          </ul>
        </div>
        <div className={styles.searchboxContainer}>
          <Select 
            className='w-full'
            placeholder={"Select Database..."}
            value={database}
            onChange={(e) => setDatabase(e)}
            options={[
              {
                label: "All Database",
                value: "all",
              },
              {
                label: "Ayurvedic Plants",
                value: "ayurvedic",
              },
              {
                label: "Unani Plants",
                value: "unani",
              },
              {
                label: "FDA Approved Drugs",
                value: "fda",
              },
            ]}
          />
          <Select 
            className='w-full'
            placeholder={"Select Criteria..."}
            value={criteria}
            onChange={(e) => setCriteria(e)}
            options={[
              {
                label: "Scientific Name",
                value: "scientific_name",
              },
              {
                label: "Common Name",
                value: "common_name",
              },
              {
                label: "Type of Cancer",
                value: "type_of_cancer",
              },
            ]}
          />
          <Input 
            style={{ width: "100%", fontSize: 15 }} 
            placeholder="Search for Plants...."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
    
          <button className="button button-primary" onClick={() => searchHandler()}>Search</button>
        </div>
  
        <div className={styles.imageOverlay} />
  
        <div className={styles.imageOverlay2} />
      </div>
    )
  } else {
    return (
      <div className={`pageContainer ${styles.dashboardContainer}`}>
        <div className={styles.searchboxContainer}>
          <Select 
            className='w-full'
            placeholder={"Select Database..."}
            options={[
              {
                label: "All Database",
                value: "all",
              },
              {
                label: "Ayurvedic Plants",
                value: "ayurvedic",
              },
              {
                label: "Unani Plants",
                value: "unani",
              },
              {
                label: "FDA Approved Drugs",
                value: "fda",
              },
            ]}
          />
          <Select 
            className='w-full'
            placeholder={"Select Criteria..."}
            options={[
              {
                label: "Scientific Name",
                value: "scientific_name",
              },
              {
                label: "Common Name",
                value: "common_name",
              },
              {
                label: "Type of Cancer",
                value: "type_of_cancer",
              },
            ]}
          />
          <Input 
            style={{ width: "100%", fontSize: 15 }} 
            placeholder="Search for Plants...."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
    
          <button className="button button-primary" onClick={() => searchHandler()}>Search</button>
        </div>
        
        <div className={styles.TableContainer}>
        <TableComponent data={Ayurvedic} isDark={isDark} toggleDark={toggleDark} />
        </div>
        <div className={styles.imageOverlay} />
  
        <div className={styles.imageOverlay2} />
      </div>
    )
  }

}

export default Dashboard