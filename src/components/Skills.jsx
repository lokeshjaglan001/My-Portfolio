import React from 'react'
import redisIcon from '../assets/redis.svg'
import bullmqIcon from '../assets/bullmq.svg'
import socketioIcon from '../assets/socketio.svg'
import prismaIcon from '../assets/prisma.svg'
import flutterIcon from '../assets/flutter.svg'
import solidityIcon from '../assets/solidity.svg'
import rustIcon from '../assets/rust.svg'
import reactNativeIcon from '../assets/react-native.svg'

export default function Skills() {
  const skills = [
  // Frontend
  { name: "HTML", icon: "fa-html5", type: "brands" },
  { name: "CSS", icon: "fa-css3-alt", type: "brands" },
  { name: "JavaScript", icon: "fa-js", type: "brands" },
  { name: "TypeScript", icon: "fa-code", type: "solid" },
  { name: "React", icon: "fa-react", type: "brands" },
  { name: "Next.js", icon: "fa-n", type: "solid" },
  { name: "Tailwind CSS", icon: "fa-wind", type: "solid" },
  { name: "Bootstrap", icon: "fa-bootstrap", type: "brands" },

  // Mobile
  { name: "Flutter", img: flutterIcon },
  { name: "React Native", img: reactNativeIcon },

  // Backend
  { name: "Node.js", icon: "fa-node-js", type: "brands" },
  { name: "Express.js", icon: "fa-server", type: "solid" },
  { name: "NestJS", icon: "fa-server", type: "solid" },

  // Databases
  { name: "MongoDB", icon: "fa-database", type: "solid" },
  { name: "MySQL", icon: "fa-table", type: "solid" },
  { name: "PostgreSQL", icon: "fa-database", type: "solid" },
  { name: "Prisma ORM", img: prismaIcon },

  // Blockchain
  { name: "Solidity", img: solidityIcon },
  { name: "Rust", img: rustIcon },
  { name: "Web3", icon: "fa-link", type: "solid" },
  { name: "Smart Contracts", icon: "fa-file-contract", type: "solid" },

  // Realtime & Queues
  { name: "Redis", img: redisIcon },
  { name: "BullMQ", img: bullmqIcon },
  { name: "Socket.IO", img: socketioIcon },

  // DevOps
  { name: "Docker", icon: "fa-docker", type: "brands" },
  { name: "Git", icon: "fa-git-alt", type: "brands" },
  { name: "GitHub", icon: "fa-github", type: "brands" },

  // Languages
  { name: "Python", icon: "fa-python", type: "brands" },
]

  return (
    <>
      <div
        className="content p-3 m-2"
        style={{
          backgroundColor: 'var(--color-1)',
          boxSizing: 'border-box'
        }}
      >
        <h1
          className='text-center mb-5'
          style={{
            fontSize: '70px',
            fontWeight: '600',
            color: 'var(--color-2)'
          }}
        >
          My Skills
        </h1>

        <div className="row d-flex justify-content-center gap-4 col-md-11 m-auto skills">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: 'var(--color-2)',
                borderRadius: '18px',
                width: '150px',
                height: '130px',
                transition: '0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
            >
              {skill.img ? (
                <img
                  src={skill.img}
                  alt={skill.name}
                  style={{ width: '48px', height: '48px', marginBottom: '15px' }}
                />
              ) : (
                <i
                  className={`fa-${skill.type} ${skill.icon} fs-1`}
                  style={{
                    color: '#0a21c0',
                    marginBottom: '15px'
                  }}
                ></i>
              )}

              <p
                className='fw-bold text-center'
                style={{
                  color: 'var(--color-3)',
                  fontSize: '20px',
                  margin: 0
                }}
              >
                {skill.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}