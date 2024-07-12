import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/home.css"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import deya from "../../../images/Deya hazra pic.webp"
import saranya from "../../../images/saranya21.jpg"

import EmailIcon from '@mui/icons-material/Email';

const people = [
    {
      id: 1,
      name: 'Deya Hazra',
      role: 'Co-Founder / CEO',
      hrefG: 'https://github.com/deyahazra',
      hrefL: 'https://www.linkedin.com/in/deya-hazra-51a23222a/',
      hrefM: 'mailto:deyahazra28@gmail.com',
      imageUrl: deya
    },
    {
        id: 2,
        name: 'Saranya Chattopadhyay',
        role: 'Co-Founder / CEO',
        hrefG: 'https://github.com/saranya2644',
        hrefL: 'https://www.linkedin.com/in/saranya-chattopadhyay-06a153230/',
        hrefM: 'mailto:saranyac226@gmail.com',
        imageUrl: saranya,
      },
     
     
    // More people...
  ]
export default function Team  () {
    return (
        <div className="team py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the creative minds and passionate individuals driving the innovation and style at Myntra Style Quest.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <div className="member">
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-rose-500 role">{person.role}</p>
                  <Button
                        variant="link"
                        className="icons"
                        size="small"
                        startIcon={<LinkedInIcon color="primary" fontSize='large'/>}
                        href={person.hrefL}
                        target="_blank"
                    />
                    <Button
                        variant="link"
                        className="icons"
                        size="small"
                        startIcon={<GitHubIcon fontSize='large'/>}
                        href={person.hrefG}
                        target="_blank"
                    />
                    <Button
                        variant="link"
                        className="icons"
                        size="small"
                        startIcon={<EmailIcon color="primary" fontSize='large'/>}
                        href={person.hrefM}
                    />
                </div>
              </div>
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
    )
}