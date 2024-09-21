import React from 'react';
import styles from "./Services.module.scss";
import speaker from '../../assets/speaker.png';
import mortage from '../../assets/mortage.png';
import kyc from '../../assets/kyc.png';
import training from '../../assets/training.png';
import telecall from '../../assets/telecall.png';
import finance from '../../assets/finance.png';
import logo from '../../assets/logo.jpeg';
const Services = () => {
    const services = [
        {
          name: "Mortgage Project",
          description: "Data entry for previous project with 3 months of work experience.",
          image:mortage
        },
        {
          name: "Telecalling",
          description: "Handling telecalling services for customer support.",
          image:telecall
        },
        {
          name: "Finance Project",
          description: "Involved in various financial analysis and reporting tasks.",
          image:finance
        },
        {
          name: "KYC Project",
          description: "Ensuring Know Your Customer compliance through data validation.",
          image:kyc
        },
        {
          name: "Training Project",
          description: "Providing training and support for ongoing client projects.",
          image:training
        }
      ];
    return (
        <div className={styles.container}>
            <div className={styles.centerContent}>
                <div className={styles.centerImage}>
                    <img src={speaker}/>
                </div>
                <h1><span class={styles.our}>Our</span> <span class={styles.services}>Services</span></h1>
                <div class={styles.centerText}>
                <div className={styles.centerText}>
                "Unlock the potential of your business with our comprehensive BPO services<br />
                We specialize in streamlining operations, enhancing efficiency, and allowing<br />
                you to focus on what truly matters—driving growth and innovation"
                </div>

                </div>
                
            <div className={styles.servicesList}>
                {services.map(service => (
                    <div className={styles.servicesContent}>
                        <div className={styles.serviceheader}>
                            <img src={service.image} alt={service.name}/>
                            <h3>{service.name}</h3>`
                        </div>
                        <div className={styles.serviceText}>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Services;