import React, { useState } from 'react';
import pdf from './pdfArray';
import './Impact-Report.css'





const ImpactReport = () => {

    const [selectedPdf, setSelectedPdf] = useState(pdf[0]);
    
    const openPdf = (pdf) => {
        setSelectedPdf(pdf);
    };
    
    return (
        <div className='' >
            <div className="impact-report-hero main-project-hero">
                <h2>GRENCHI'S IMPACT REPORT</h2>
            </div>
            <div className="impact-report-container">
                <div className="impact-reports">
                    {pdf.map((pdf)=> (
                        <div 
                        className={`impact-report-pdf ${selectedPdf && selectedPdf.id === pdf.id ? 'active' : ''}`}
                        key={pdf.id}
                        onClick={() => openPdf(pdf)}
                        style={{
                            padding: '10px',
                            margin: '10px',
                            cursor: 'pointer',
                        }}
                        >
                            {pdf.title}
                        </div>
                    ))}
                </div>

                <div className="pdf-box">
                    {selectedPdf && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <iframe 
                                src= {selectedPdf.url}
                                width="100%" 
                                height="600px" 
                                title={selectedPdf.title} 
                                style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ImpactReport;
