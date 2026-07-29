import { CompanyMilestone, Industry, JobOpening, LeadershipMember, Solution, TechPartner } from '../types';

const image = (name: string) => `/images/${name}`;

export const COMPANY_INFO = {
  name: 'Arsenal Infosolutions Pvt. Ltd.', shortName: 'Arsenal Infosolutions',
  tagline: 'Empowering Business by Balancing Today & Preparing for Tomorrow',
  hqLocation: 'New Delhi, India', address: '1005 & 1006, Kailash Building, 26 - KG Marg, New Delhi - 110001',
  phone: '011-41101571', tollFree: '1800 309 1255', email: 'info@aipl.net', salesEmail: 'info@aipl.net', supportEmail: 'info@aipl.net',
  workingHours: '', socialLinks: { linkedin: '#', twitter: '#', facebook: '#' }
};

type SolutionSource = Omit<Solution, 'id' | 'slug' | 'businessBenefits'> & { id: string; slug: string };
const solution = (id: string, title: string, category: Solution['category'], iconName: string, heroImage: string, fullDescription: string, keyFeatures: string[], techPartners: string[]): Solution => ({
  id, slug: id, title, category, iconName, heroImage: image(heroImage), fullDescription, shortDescription: fullDescription, keyFeatures, techPartners, businessBenefits: []
});

export const SOLUTIONS: Solution[] = [
  solution('network', 'Networking', 'networking', 'Network', 'network.png', 'Planning, designing (building HLDs and LLDs), supply, execution and support of your complete network. We provide single-window turnkey networking solutions for best performance.', ['Data Centre Network', 'LAN & WAN Solutions', 'Fiber To Home', 'Good Performance Wireless', 'Virtual Private Network (VPN)'], ['Cisco', 'HPE', 'Dell', 'Juniper', 'Arista', 'Extreme', 'Fortinet', 'Tejas Networks', 'Ruckus', 'Cambium Networks', 'Avaya', 'Infoblox']),
  solution('cyber-security', 'Cyber Security', 'security', 'ShieldCheck', 'cs.png', 'Cyber security is one of the key challenges faced by all of us. We help you build a robust, secure framework for addressing your security concerns with focus on monitoring, reporting and mitigation.', ['Endpoint Security', 'Cloud Security', 'Vulnerability Assessment', 'Security Architecture And Implementation', 'Managed Access & Identity Controls'], ['Cisco', 'Zscaler', 'IBM', 'Micro Focus', 'Palo Alto', 'Fortinet', 'Array Networks', 'Check Point', 'F5', 'Forescout', 'Data Resolve', 'Trend Micro', 'McAfee', 'HCL', 'Radware']),
  solution('cloud', 'Cloud', 'cloud', 'Server', 'cloud.png', 'Cloud-based solutions including designing and provisioning across a range of cloud service providers.', ['Cloud Productivity Solution', 'Consulting & Professional Services', 'Hybrid Cloud Consultancy And Solutions', 'Private Cloud Consultancy And Solutions', 'Public Cloud Consultancy And Solutions', 'Remote Management Services'], ['AWS', 'Google Cloud', 'Microsoft', 'VMware', 'Citrix']),
  solution('storage-compute', 'Storage Compute & HCI', 'datacenter', 'Database', 'sc.png', 'We help you with sizing of your storage or compute requirements based on your application or data; add-on services such as virtualisation or HCI, supply and execution with overall support.', ['Server Infrastructure', 'Storage Infrastructure', 'Virtualisation', 'Back Up Solution', 'Operating System', 'Private Cloud Solutions', 'Public Cloud', 'Hybrid Cloud Capability'], ['NetApp', 'HPE', 'Dell', 'Cisco', 'Nutanix', 'VMware']),
  solution('virtualisation', 'Virtualisation', 'workplace', 'Laptop', 'var.png', 'We do the complete virtualisation of the IT infrastructure, starting from data center resources such as compute, storage and network to application and desktop virtualisation.', [], ['VMware', 'Red Hat', 'Microsoft', 'Cisco', 'Dell', 'EMC', 'NetApp']),
  solution('managed-services', 'Managed Services', 'managed', 'Headset', 'ms.png', 'We ensure candidate deployment within 10 days of issuing the order, helping government and corporate projects run uninterruptedly.', ['Faster Candidate Deployment', 'RMS For Employee Lifecycle Management'], ['Everest Group', 'ServiceNow']),
  solution('software-licensing', 'Industry Leading Software', 'workplace', 'CheckCircle2', 'sla.png', 'Working with you to identify the best mix of licensing for minimum annual payouts.', ['Software Asset Management', 'Software Licensing Assessment Services', 'Self-Service Monitoring'], ['Cisco', 'Zscaler', 'IBM', 'Micro Focus', 'Palo Alto', 'Fortinet', 'CrowdStrike']),
  solution('application-monitoring', 'Application Performance Management', 'managed', 'Zap', 'apm.png', 'We offer Application Performance Management to measure application performance, availability and user experience, using this data to identify and resolve application issues before they impact customers.', ['Our Capabilities'], ['Cisco', 'Dynatrace']),
  solution('passive-network', 'Passive Network & Non IT', 'networking', 'Network', 'pn.png', 'We do complete site survey and suggest a bill of material as per your locations and node requirements along with the exact path layout.', ['Fiber And Copper Laying', 'Power Solutions', 'Racks', 'Chemical Earthing'], ['CommScope', 'ER&M', 'Molex', '3C3', 'Eaton', 'APC', 'Rittal', 'APW']),
  solution('physical-safety', 'Physical Safety & Surveillance', 'security', 'ShieldCheck', 'pss.png', 'Our CCTV solution design is based on requirement, proposing the right set of equipment and executing the same.', ['Surveillance', 'Access Control System', 'Analytics'], ['Nordon Surveillance', 'Bosch', 'Honeywell', 'Pelco', 'Cisco', 'Tyco']),
  solution('collaboration', 'Collaboration', 'workplace', 'Laptop', 'collaboration.png', 'The future of work is remote. Keep your teams happier, more productive and more connected than ever before with powerful collaboration tools.', ['Conferencing', 'Contact Centre', 'Collaboration Endpoints', 'Unified Communications', 'Team Collaboration', 'Cognitive Collaboration Solutions'], ['Cisco', 'Avaya', 'Polycom', 'PeopleLink', 'Crestron']),
  solution('data-centre', 'Data Centre', 'datacenter', 'Server', 'sc.png', 'Data center build and integration of multiple solutions related to data center, including design, supply and execution of passive and active components.', ['Data Center Optimisation', 'Efficient Operation', '360 Degree Services For DC Components'], ['Cisco', 'HPE', 'Dell', 'Juniper', 'Arista', 'Extreme', 'Fortinet', 'Avaya']),
  solution('infrastructure', 'Infrastructure Management', 'managed', 'Layers', 'im.png', 'Data center build and integration of multiple solutions related to data center.', ['Data Center Solutions', 'Enterprise Mobility Solutions', 'High Performance Computing Solutions', 'Enterprise Network Solutions', 'Enterprise Management Solutions (EMS)'], ['Cisco', 'HPE', 'Dell', 'Juniper', 'Arista', 'Extreme', 'Fortinet', 'Avaya']),
  solution('aws-cloud', 'AWS Cloud Computing', 'cloud', 'Server', 'aws.png', 'Amazon Web Services (AWS) provides on-demand cloud computing platforms and APIs to individuals, companies and governments on a metered pay-as-you-go basis.', ['Compute', 'Storage', 'Databases', 'Networking', 'Machine Learning And AI', 'Security And Identity', 'Analytics', 'Serverless Computing', 'IoT', 'Developer Tools'], ['AWS'])
];

const partner = (id: string, name: string, logo: string): TechPartner => ({ id, name, logoText: name, logoImage: image(logo), category: 'Technology Partner', tier: 'Partner', description: '', website: '', specializations: [] });
export const TECH_PARTNERS: TechPartner[] = [
  ['cisco','Cisco','cisco.png'],['innspark','Innspark','innspark1.png'],['arista','Arista','arista.png'],['accops','Accops','accops.png'],['akamai','Akamai','akami.png'],['avaya','Avaya','avaya.png'],['aws','AWS','aws.png'],['citrix','Citrix','citrix.png'],['commscope','CommScope','commscope.png'],['crowdstrike','CrowdStrike','crowdstrike.png'],['dataresolve','Data Resolve','dataresolve.png'],['dell','Dell','dell.png'],['eaton','Eaton','eaton.png'],['emc','EMC','emc.png'],['erm','ER&M','er&m.png'],['extreme','Extreme','extreme.png'],['f5','F5','f5.png'],['googlecloud','Google Cloud','googlecloud.png'],['hcl','HCL','hcl.png'],['hitachi','Hitachi','hitachi.png'],['hpe','HPE','HPE.png'],['huawei','Huawei','huawei.png'],['ibm','IBM','ibm.png'],['infoblox','Infoblox','infoblox.png'],['ixia','Ixia','ixia.png'],['juniper','Juniper','juniper.png'],['mcafee','McAfee','mcafee.png'],['microfocus','Micro Focus','microfocus.png'],['microsoft','Microsoft','microsoft.png'],['molex','Molex','molex.png'],['netapp','NetApp','netapp.png'],['oracle','Oracle','oracle.png'],['paloalto','Palo Alto','paloalto.png'],['quest','Quest','quest.png'],['redhat','Red Hat','redhat.png'],['samsung','Samsung','samsung.png'],['seceon','Seceon','seceon.png'],['trendmicro','Trend Micro','trendmicro.png'],['vmware','VMware','vmware.png'],['zscaler','Zscaler','zscaler.png'],['fortinet','Fortinet','fortinet.png'],['tejas','Tejas Networks','tejas-network.png'],['ruckus','Ruckus','ruckus.png'],['cambium','Cambium Networks','cambium_networks.png'],['array','Array Networks','array_networks.png'],['checkpoint','Check Point','checkpoint.png'],['forescout','Forescout','forescout.png'],['radware','Radware','radware.png'],['nutanix','Nutanix','nutanix.png'],['everest','Everest Group','everest-group.png'],['servicenow','ServiceNow','service-now.png'],['dynatrace','Dynatrace','dynatrace.png'],['3c3','3C3','3c3.png'],['apc','APC','apc.png'],['rittal','Rittal','rittal.png'],['apw','APW','apw.png'],['nordon','Nordon Surveillance','nordon-surviellance.png'],['bosch','Bosch','bosch.png'],['honeywell','Honeywell','honeywell.png'],['pelco','Pelco','pelco.png'],['tyco','Tyco','tyco.png'],['polycom','Polycom','polycom.png'],['peoplelink','PeopleLink','peoplelink.png'],['crestron','Crestron','crestron.png'],['zoom','Zoom','zoom.jpg'],['ideaforge','ideaForge','ideaforge.png'],['gcp','Google Cloud Partner','GCP-ARSENAL-PARTNER.png'],['dun','Dun & Bradstreet','dun.jpg'],['neo4j','Neo4j','neo4j.jpg']
].map(([id, name, logo]) => partner(id, name, logo));

export const INDUSTRIES: Industry[] = [
  { title: 'Defence', iconName: 'Shield', description: 'Secure, mission-critical IT infrastructure and network solutions built for defence organizations.' },
  { title: 'Corporates', iconName: 'Building2', description: 'End-to-end technology modernization for enterprise businesses across India.' },
  { title: 'Research & Development Institutes', iconName: 'FlaskConical', description: 'High-performance computing and collaboration tools for research-driven institutions.' },
  { title: 'Aviation', iconName: 'Plane', description: 'Reliable network and security infrastructure for aviation sector operations.' },
  { title: 'Construction', iconName: 'HardHat', description: 'Connected site infrastructure and workplace automation for construction firms.' },
  { title: 'Shipping', iconName: 'Ship', description: 'Robust connectivity and data solutions for logistics and shipping operations.' },
  { title: 'Judiciary', iconName: 'Gavel', description: 'Secure records management and IT infrastructure for judicial institutions.' },
  { title: 'Government', iconName: 'Landmark', description: 'Citizen-focused digital infrastructure for government departments and agencies.' },
  { title: 'Citizen Services', iconName: 'Users', description: 'Scalable systems supporting public-facing citizen service platforms.' },
  { title: 'Education', iconName: 'GraduationCap', description: 'Campus-wide networking and collaboration tools for educational institutions.' },
  { title: 'Finance', iconName: 'Wallet', description: 'Secure, compliant infrastructure for financial services organizations.' },
  { title: 'Healthcare', iconName: 'HeartPulse', description: 'Dependable IT systems supporting critical healthcare operations.' },
  { title: 'IT/ITES', iconName: 'Cpu', description: 'Technology backbone solutions for IT and IT-enabled services companies.' },
  { title: 'PSU', iconName: 'Factory', description: 'Large-scale infrastructure solutions for public sector undertakings.' },
].map(({ title, iconName, description }) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  title,
  description,
  iconName,
  stats: '',
  highlights: []
}));
export const LEADERSHIP: LeadershipMember[] = [
  {
    id: 'vinod-patani',
    name: 'Vinod Patani',
    role: 'CEO & Founder',
    image: image('user-1.png'),
    linkedin: 'https://www.linkedin.com/in/vinodpatani/',
    bio: "CEO and founder of Arsenal Infosolutions comes with an experience of 33+ years with 17+ years at NIC/NICSI as a technical consultant cum project coordinator. He later moved to Cisco where he was the sales leader and was driving public sector business across states and central govt. Vinod moved out as a Vice President in Cisco after having spent 11 years with the company. He brings with him a strong domain knowledge, experience of having worked across multiple verticals and having handled hundreds of projects. He is an energetic entrepreneur who is able to think, organize and act strategically with a commitment to action and a record of success. He comes out as a reflective leader with strategic follow-through who takes full accountability and responsibility."
  },
  {
    id: 'sachin-gupta',
    name: 'Sachin Gupta',
    role: 'Leadership Team',
    image: image('user-2.png'),
    linkedin: 'https://www.linkedin.com/in/sachin-gupta-24b5674/',
    bio: "Sachin Gupta leads the business initiative in the enterprise space with focus on verticals such as education & healthcare, public sector units and corporates. With IT coming out as a strong enabler across all these domains, he brings with him a rich experience of more than 20+ years with 14 years in Cisco where he was last leading the overall business initiative in the education vertical. He has been responsible for driving the company strategy in the past across multiple customer segments and has an exposure of multiple large strategic projects that he has led from a business perspective. He is a mechanical engineer from University of Pune and has an MBA in marketing from the University Department of Management Sciences, Pune."
  },
  {
    id: 'amit-khare',
    name: 'Amit Khare',
    role: 'Leadership Team',
    image: image('amit.jpg'),
    linkedin: 'https://www.linkedin.com/in/amit-khare-236bb6/',
    bio: "Amit is an accomplished leader with almost 20+ years of deep expertise in the field of digital transformation, client consulting and execution of large projects. During his journey he has partnered with several Federal Organizations in India to achieve sustainable competitive advantage and business impact leveraging digital, data and AI-enabled solutions. With his industry experience spanning across India Federal, IT&ITES and Manufacturing, he brings in a unique blend of digital solution expertise, diverse cross-industry perspective and ability to partner from strategy to execution helping clients accelerate their digital transformation journeys. Before Arsenal, Amit has worked in some of the leading IT organizations like Microsoft, HP & Cisco. Amit holds a Master's Degree in Business Management from University of Pune, India, Senior Management Program from IIM Calcutta. He is an Electronics engineering graduate from University of Pune."
  }
];
export const MILESTONES: CompanyMilestone[] = [];
export const JOB_OPENINGS: JobOpening[] = [];
export const STATISTICS = []; export const VALUE_PROPOSITIONS = []; export const TESTIMONIALS = []; export const FAQS = [];
