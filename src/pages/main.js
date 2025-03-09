import React, { useState } from "react";
import { Header } from '../components/Header';

export const Main = () => {
  // State for hover effects
  const [isApplistHovered, setIsApplistHovered] = useState(false);
  const [isWaitlistHovered, setIsWaitlistHovered] = useState(false);
  const [isSponsorHovered, setIsSponsorHovered] = useState(false);

  return (
    <div style={{ 
      backgroundImage: 'url(/frame1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundAttachment: 'fixed',
      paddingTop: '2vw',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Title positioned at the very top */}
      <h1 style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '4vw',
        margin: '2vw 0',
        width: '100%',
        zIndex: 2,
        fontWeight: 700,
      }}>
        Toronto Innovation Challenge!
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        flex: 1,
        width: '100%',
        marginTop: '-4vw'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
          margin: '5vw'
        }}>
          <div>
            <p style={{
              color: 'white',
              textAlign: 'left',
              fontSize: '4vw',
              margin: 0,
              fontWeight: 500
            }}>Shoot for the stars, aim for the moon.</p>  
            <p style={{
              color: 'white',
              textAlign: 'left',
              fontSize: '2.5vw',
              margin: 0,
              marginTop: 50,
              fontWeight: 300
            }}>Coming Soon, May 2025</p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '2vw', 
              marginTop: '3vw',
              alignItems: 'flex-start'
            }}>
              {/* Top Row */}
              <div style={{ display: 'flex', gap: '2vw' }}>
                {/* Become an Organizer */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSczitIvv3hHcJdaTg8N9XVFU_b01BpExUDgIrQnBW2cEh4Uuw/viewform?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: isApplistHovered ? '#6a4573' : '#80528D',
                    color: 'white',
                    padding: '1.5vw 3vw',
                    border: '1px solid white',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.3vw',
                    fontWeight: 400,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    transform: isApplistHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setIsApplistHovered(true)}
                  onMouseLeave={() => setIsApplistHovered(false)}
                >
                  Become an Organizer
                </a>

                {/* Join the Waitlist Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfn3BFa-lif8_Hp_T-TItZcUZxwW4yl169N0gwBotF8GenpBw/viewform?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: isWaitlistHovered ? '#6a4573' : '#80528D',
                    color: 'white',
                    padding: '1.5vw 3vw',
                    border: '1px solid white',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.3vw',
                    fontWeight: 400,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    transform: isWaitlistHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setIsWaitlistHovered(true)}
                  onMouseLeave={() => setIsWaitlistHovered(false)}
                >
                  Join the Waitlist
                </a>
              </div>

              {/* Bottom Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4-8g8ur6dFzQSd_OFzV7QisTGxWhs2gqmnDpvu9RhLOw0aw/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: isSponsorHovered ? '#6a4573' : '#80528D',
                  color: 'white',
                  padding: '1.5vw 3vw',
                  border: '1px solid white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.3vw',
                  fontWeight: 400,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: isSponsorHovered ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => setIsSponsorHovered(true)}
                onMouseLeave={() => setIsSponsorHovered(false)}
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <img 
            style={{ 
              width: '100%', 
              height: 'auto' 
            }} 
            src='/logo-transparent-bg.png' 
            alt="Logo" 
          />
        </div>
      </div>
    </div>
  );
};