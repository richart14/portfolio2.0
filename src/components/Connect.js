import React, { Component } from 'react'
import Links from './Links';
import resume from './pdf/Richard\'s Tech Resume.pdf'
import './stylesheets/Connect.css';

export class Connect extends Component {
  render() {
    const { status } = this.props;
    const connectLinks = [
      {
        name: 'email', href: 'mailto:tomrichard14@gmail.com', icon : 'fa fa-envelope'
      },
      {
        name: 'linkedin', href: 'https://www.linkedin.com/in/richart14/', icon: 'fa fa-linkedin', blank : true
      },
      {
        name: 'github', href: 'https://github.com/richart14', icon: 'fa fa-github', blank : true
      },
      {
        name: 'resume', href: `${resume}`, icon: 'fa fa-file', blank: true
      }
    ];
    return (
      <section className={`connect ${ status.active ? 'active' : '' }`} >
        <div className="icon-box">
          {
            connectLinks.map((link, i) => <Links icon={link.icon} blank={link.blank} href={link.href} index={i+1} key={`link-${i}`}/>)
          }
        </div>
      </section>
    )
  }
}

export default Connect
