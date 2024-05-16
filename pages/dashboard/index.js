import React, { useEffect, useState } from 'react'
import styles from "./dashboard.module.scss";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Ayurvedic, FDA, Unani } from '../../utils/misc';
import TableComponent from '@/components/TableComponent';
import { Col, Drawer, Input, Row, Select } from 'antd/lib';
import { Card } from 'antd/lib';
import Link from 'next/link';

const Dashboard = ({ isDark, setIsDark, toggleDark }) => {
  const [searchValue, setSearchValue] = useState("");
  const [database, setDatabase] = useState(null);
  const [criteria, setCriteria] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);

  const handleViewPlants = (rowData) => {
    setSelectedRowData(rowData);
    setIsDrawerOpen(true);
  }

  const searchHandler = () => {
    setIsSearch(true);
    let filteredData = [];
    if (database === "all") {
      filteredData = [...Unani, ...Ayurvedic, ...FDA];
    } else if (database === "unani") {
      filteredData = Unani;
    } else if (database === "ayurvedic") {
      filteredData = Ayurvedic;
    } else if (database === "fda") {
      filteredData = FDA;
    }
  
    // Filter based on search value and criteria
    filteredData = filteredData.filter(item => {
      if (criteria === "scientific_name") {
        return item.scientific_name.toLowerCase().includes(searchValue.toLowerCase());
      } else if (criteria === "common_name") {
        return item.common_name.toLowerCase().includes(searchValue.toLowerCase());
      } else if (criteria === "type_of_cancer") {
        return item.type_of_cancer.toLowerCase().includes(searchValue.toLowerCase());
      }
      return true; // If no criteria is selected, return all data
    });
  
    setTableData(filteredData);
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
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" /> Search by scientific or common names to find the perfect plant.</li>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" /> Dive deep and discover the chemical makeup and anti-cancer compounds in each plant.</li>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" /> See it to believe it! Immerse yourself in a library of beautiful plant images.</li>
            <li><img src='https://images.leverageedu.com/homepage/bullet-check.svg' alt="bullet_check_image" /> Unravel the science: Delve into curated research articles for in-depth knowledge.</li>
          </ul>
        </div>
        <div className={styles.searchboxContainer}>
          <Select 
            className='w-full'
            placeholder="Select Database..."
            value={database}
            size='large'
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
            size='large'
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
            style={{ width: "100%", }} 
            size='large'
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
        <Drawer 
          open={isDrawerOpen}
          closeIcon={false}
          width={"1080px"}
          bodyStyle={{ background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(221,227,245,1) 35%, rgba(213,223,255,1) 100%)" }}
          headerStyle={{ background: "linear-gradient(360deg, rgba(255,255,255,1) 50%, rgba(221,227,245,1) 95%, rgba(213,223,255,1) 50%)" }}
          onClose={() => setIsDrawerOpen(false)}
          title={<div className='italic text-2xl p-2'>{selectedRowData?.scientific_name}</div>}
          extra={<button className='button button-white shadow-sm' onClick={() => setIsDrawerOpen(false)}>Close</button>}
          rootStyle={{ zIndex: "9999"}}
          placement="right"
          destroyOnClose
        >
          {selectedRowData && (
            <Card className=' shadow p-2'>
              <Row>
                <Col className='mb-10 ml-10' span={24}><img className={styles.plantImages} src={`/images/plantImages/${selectedRowData.image}`} width={480} alt={selectedRowData.images} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Scientific Name</Col>
                <Col span={1}>:</Col>
                <Col className='italic text-base font-medium' span={17}>{selectedRowData.scientific_name}</Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Common Name</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.common_name}</Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Type of Cancer</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.type_of_cancer}</Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Component</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.components}</Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Phytochemicals</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.compound}</Col>
              </Row>
              {selectedRowData.fda_approved_drug && <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>FDA Approved Drug</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.fda_approved_drug}</Col>
              </Row>}
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Part of Plant</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.part}</Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Geographical Distribution</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium' span={17}>{selectedRowData.region_found}</Col>
              </Row>
              <Row className='mb-2'>
                <Col span={6} className='text-lg font-medium'>Reference</Col>
                <Col span={1}>:</Col>
                <Col className='text-base font-medium'><Link href={selectedRowData.reference} target="_blank">Read Article</Link></Col>
              </Row>
            </Card>
          )}
        </Drawer>
        <div className={styles.searchboxContainer2}>
          <Select 
            className='w-full'
            placeholder="Select Database..."
            value={database}
            size='large'
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
            size='large'
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
            style={{ width: "100%", }} 
            size='large'
            placeholder="Search for Plants...."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
    
          <button className="button button-primary" onClick={() => searchHandler()}>Search</button>
        </div>
        
        <div className={styles.TableContainer}>
        <TableComponent data={tableData} isDark={isDark} toggleDark={toggleDark} handleViewPlants={handleViewPlants} />
        </div>
        <div className={styles.imageOverlay} />
  
        <div className={styles.imageOverlay2} />
      </div>
    )
  }

}

export default Dashboard