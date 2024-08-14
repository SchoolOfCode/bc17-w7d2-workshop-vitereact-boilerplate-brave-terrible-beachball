import React from 'react';
import { CompanyInfo } from './companyInfo';    
import { SocailsLinkList } from './socailsLinkList';

export function Footer(){
    return (
    <>
    <footer className="footer">
        <SocailsLinkList />
        <CompanyInfo />
    </footer>
    </>
    )
  }