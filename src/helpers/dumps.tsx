import { IoMdFlame } from "react-icons/io";
import { Url } from "url";

export type FAQ = {
  icon: JSX.Element;
  title: string;
  info: string;
};
export type QuestionsMenu = {
  question: string;
  info: string;
};

export const Questions = [
  {
    question: "Do giveaway oga mi sir",
    info: " Lorem ipsum Illo saepe, earum culpa eligendi at alias soluta iusto Voluptas quaerat quisquam laudantium magnam incidunt ab voluptates odio blanditiis numquam.",
  },
  {
    question: "Do giveaway oga mi sir",
    info: " Lorem ipsum Illo saepe, earum culpa eligendi at alias soluta iusto Voluptas quaerat quisquam laudantium magnam incidunt ab voluptates odio blanditiis numquam.",
  },
  {
    question: "Do giveaway oga mi sir",
    info: " Lorem ipsum Illo saepe, earum culpa eligendi at alias soluta iusto Voluptas quaerat quisquam laudantium magnam incidunt ab voluptates odio blanditiis numquam.",
  },
  {
    question: "Do giveaway oga mi sir",
    info: " Lorem ipsum Illo saepe, earum culpa eligendi at alias soluta iusto Voluptas quaerat quisquam laudantium magnam incidunt ab voluptates odio blanditiis numquam.",
  },
  {
    question: "Do giveaway oga mi sir",
    info: " Lorem ipsum Illo saepe, earum culpa eligendi at alias soluta iusto Voluptas quaerat quisquam laudantium magnam incidunt ab voluptates odio blanditiis numquam.",
  },
];

export const Filter = [
  { name: "All" },
  { name: "Tech" },
  { name: "Education" },
  { name: "Science" },
  { name: "Realtor" },
  { name: "Engineering" },
];

export const FAQs = [
  {
    icon: <IoMdFlame />,
    title: "Designer",
    info: "Job updates on product designers , web designers, graphic developers with tools like figma, adobe,sketch etc",
  },
  {
    icon: <IoMdFlame />,
    title: "Software Developer",
    info: "Job updates on product developers , web developers,  with their various stacks and dev tools",
  },
  {
    icon: <IoMdFlame />,
    title: "Product Designer",
    info: "Lorem, ipsum dolor sit  ducimus et cumque enim aliquid, sunt consequuntur numquam recusandae voluptatibus. Magnam quidem beatae nihil aliquam?",
  },
  {
    icon: <IoMdFlame />,
    title: "Designer",
    info: "Job updates on product designers , web designers, graphic developers with tools like figma, adobe,sketch etc",
  },
  {
    icon: <IoMdFlame />,
    title: "Software Developer",
    info: "Job updates on product developers , web developers,  with their various stacks and dev tools to help them write scalable and maintainable codes.",
  },
  {
    icon: <IoMdFlame />,
    title: "Designer",
    info: "Job updates on product designers , web designers, graphic developers with tools like figma, adobe,sketch etc",
  },
  {
    icon: <IoMdFlame />,
    title: "Software Developer",
    info: "Job updates on product developers , web developers,  with their various stacks and dev tools to help them write scalable and maintainable codes.",
  },
  {
    icon: <IoMdFlame />,
    title: "Designer",
    info: "Job updates on product designers , web designers, graphic developers with tools like figma, adobe,sketch etc",
  },
  {
    icon: <IoMdFlame />,
    title: "Software Developer",
    info: "Job updates on product developers , web developers,  with their various stacks and dev tools to help them write scalable and maintainable codes.",
  },
];

export type LocationType = {
  name: string;
};
export type CategoryType = {
  name: string;
};
export type LevelType = {
  name: string;
  short_name: string;
};
export type RefType = {
  landing_page: string;
};
export type CompanyType = {
  id: number;
  short_name: string;
  name: string;
};

export type JobType = {
  contents: string;
  name: string;
  type: string;
  publication_date: string;
  short_name: string;
  model_type: string;
  id: number;
  locations: LocationType[];
  categories: CategoryType[];
  levels: LevelType[];
  tags: any;
  refs: RefType;
  company: CompanyType;
};

export const JobProto = [
  {
    contents:
      "<p><b>CO Salary Range: USD 65,800.00 - 94,000.00 per year</b><br><br><strong>Department Summary</strong><br><br>DISH is a Fortune 200 company that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service - Sling TV - that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.<br><br>Now we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.<br><br>We are driven by curiosity, pride, adventure, and a desire to win - it's in our DNA. We're looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.<br><br>Opportunity is here. We are DISH.<br> <br><strong>Job Duties and Responsibilities</strong><br><br><strong>Key Responsibilities:</strong><br><ul><li>As an Engineer for a mobile application team, you will be responsible for the mobility and cloud solutions that our customers and retailers use to transact with DISH's brands</li><li>Work in a fast-paced agile driven extreme programming environment with focus on test driven development and CI/CD</li><li>Translate documented requirements/stories from Rally into mobile tech requirements based on industry best practices</li><li>Solve practical problems and deal with a variety of concrete variables in situations where only limited standardization exists</li></ul> <br><br><strong>Day-to-day Responsibilities:</strong><br><ul><li>Design and build applications for the Android platform to support DISH systems.</li><li>Utilize Google Cloud Platform (GCP) products like Firebase, Firestore, Big Query, Cloud functions, Cloud scheduler, IAM, Pub/Sub, etc. for rapid mobile application development</li><li>Develop CI/CD pipelines that can be adopted for serverless cloud deployments</li><li>Understand &amp; Work on the Stories/Tasks assigned, includes coding and unit test coverage</li><li>Update stories and tasks with status/comments  for accuracy</li><li>As part of Coding/Testing ensure Accessibility is addressed along with following the MR guidelines before merge requests</li><li>Support any production issue as part of your rotation and update Incidents to keep it current/accurate</li><li>As part of the Test cycle, work on the defects related to your area or assigned to you.</li><li>Identify any additional stories/tasks needed and coordinate with Release Lead/PO to get those created/updated </li></ul><strong>Skills, Experience and Requirements</strong><br><br><strong>Education:</strong>  Bachelor's degree in Computer Science or Information Technology or a related discipline<br><br><strong>Skills and Qualifications:</strong><br><br><ul><li>2-4 years experience in managing complex system requirements</li><li>2-4 years experience with Android app store process</li><li>Experience with web technologies</li><li>Experience in product design</li><li>Understanding of UI/UX design work for both web and mobile platforms</li><li>Experience working with remote data via REST and JSON, and third-party libraries and APIs</li><li>Experience with the software development life cycle (SDLC) environment</li><li>Proficient understanding of code versioning tools, such as Git</li><li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li><li>Ability to understand business requirements and translate them into technical requirements</li><li>Experience with Firebase </li></ul> <br><br><strong>Preferred Qualifications:</strong><br><ul><li>Professional experience developing/operating solutions built on AWS</li><li>Experience working within software development or Internet-related industries</li><li>Experience with microservices architectures</li></ul><br><strong>Work Attire: </strong> Business casual<br> <br><strong>Salary Range </strong><br><br>Compensation: $65,800.00/Year - $94,000.00/Year <br><strong> Compensation and  Benefits</strong><br><br>We also offer versatile health perks, including flexible spending accounts, HSA, a 401(k) Plan with company match, ESPP, career opportunities, and a flexible time away plan; all benefits can be viewed here: DISH Benefits. <br><br>The base pay range shown is a guideline. Individual total compensation will vary based on factors such as qualifications, skill level, and competencies; compensation is based on the role's location and is subject to change based on work location. Candidates need to successfully complete a pre-employment screen, which may include a drug test and DMV check.</p>",
    name: "Software Engineer - Mobile Apps - Android",
    type: "external",
    publication_date: "2023-10-05T23:10:31Z",
    short_name: "software-engineer-mobile-apps-android-c94d4d",
    model_type: "jobs",
    id: 12526490,
    locations: [
      {
        name: "Englewood, CO",
      },
    ],
    categories: [
      {
        name: "Real Engineering",
      },
    ],
    levels: [
      {
        name: "Mid Level",
        short_name: "mid",
      },
    ],
    tags: [],
    refs: {
      landing_page:
        "https://www.themuse.com/jobs/dish/software-engineer-mobile-apps-android-c94d4d",
    },
    company: {
      id: 15000252,
      short_name: "dish",
      name: "DISH",
    },
  },
  {
    contents:
      "<p><b>CO Salary Range: USD 65,800.00 - 94,000.00 per year</b><br><br><strong>Department Summary</strong><br><br>DISH is a Fortune 200 company that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service - Sling TV - that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.<br><br>Now we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.<br><br>We are driven by curiosity, pride, adventure, and a desire to win - it's in our DNA. We're looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.<br><br>Opportunity is here. We are DISH.<br> <br><strong>Job Duties and Responsibilities</strong><br><br><strong>Key Responsibilities:</strong><br><ul><li>As an Engineer for a mobile application team, you will be responsible for the mobility and cloud solutions that our customers and retailers use to transact with DISH's brands</li><li>Work in a fast-paced agile driven extreme programming environment with focus on test driven development and CI/CD</li><li>Translate documented requirements/stories from Rally into mobile tech requirements based on industry best practices</li><li>Solve practical problems and deal with a variety of concrete variables in situations where only limited standardization exists</li></ul> <br><br><strong>Day-to-day Responsibilities:</strong><br><ul><li>Design and build applications for the Android platform to support DISH systems.</li><li>Utilize Google Cloud Platform (GCP) products like Firebase, Firestore, Big Query, Cloud functions, Cloud scheduler, IAM, Pub/Sub, etc. for rapid mobile application development</li><li>Develop CI/CD pipelines that can be adopted for serverless cloud deployments</li><li>Understand &amp; Work on the Stories/Tasks assigned, includes coding and unit test coverage</li><li>Update stories and tasks with status/comments  for accuracy</li><li>As part of Coding/Testing ensure Accessibility is addressed along with following the MR guidelines before merge requests</li><li>Support any production issue as part of your rotation and update Incidents to keep it current/accurate</li><li>As part of the Test cycle, work on the defects related to your area or assigned to you.</li><li>Identify any additional stories/tasks needed and coordinate with Release Lead/PO to get those created/updated </li></ul><strong>Skills, Experience and Requirements</strong><br><br><strong>Education:</strong>  Bachelor's degree in Computer Science or Information Technology or a related discipline<br><br><strong>Skills and Qualifications:</strong><br><br><ul><li>2-4 years experience in managing complex system requirements</li><li>2-4 years experience with Android app store process</li><li>Experience with web technologies</li><li>Experience in product design</li><li>Understanding of UI/UX design work for both web and mobile platforms</li><li>Experience working with remote data via REST and JSON, and third-party libraries and APIs</li><li>Experience with the software development life cycle (SDLC) environment</li><li>Proficient understanding of code versioning tools, such as Git</li><li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li><li>Ability to understand business requirements and translate them into technical requirements</li><li>Experience with Firebase </li></ul> <br><br><strong>Preferred Qualifications:</strong><br><ul><li>Professional experience developing/operating solutions built on AWS</li><li>Experience working within software development or Internet-related industries</li><li>Experience with microservices architectures</li></ul><br><strong>Work Attire: </strong> Business casual<br> <br><strong>Salary Range </strong><br><br>Compensation: $65,800.00/Year - $94,000.00/Year <br><strong> Compensation and  Benefits</strong><br><br>We also offer versatile health perks, including flexible spending accounts, HSA, a 401(k) Plan with company match, ESPP, career opportunities, and a flexible time away plan; all benefits can be viewed here: DISH Benefits. <br><br>The base pay range shown is a guideline. Individual total compensation will vary based on factors such as qualifications, skill level, and competencies; compensation is based on the role's location and is subject to change based on work location. Candidates need to successfully complete a pre-employment screen, which may include a drug test and DMV check.</p>",
    name: "Software Engineer - Mobile Apps - Android",
    type: "external",
    publication_date: "2023-10-05T23:10:31Z",
    short_name: "software-engineer-mobile-apps-android-c94d4d",
    model_type: "jobs",
    id: 12526490,
    locations: [
      {
        name: "Englewood, CO",
      },
    ],
    categories: [
      {
        name: " Tech",
      },
    ],
    levels: [
      {
        name: "Mid Level",
        short_name: "mid",
      },
    ],
    tags: [],
    refs: {
      landing_page:
        "https://www.themuse.com/jobs/dish/software-engineer-mobile-apps-android-c94d4d",
    },
    company: {
      id: 15000252,
      short_name: "dish",
      name: "DISH",
    },
  },
  {
    contents:
      "<p><b>CO Salary Range: USD 65,800.00 - 94,000.00 per year</b><br><br><strong>Department Summary</strong><br><br>DISH is a Fortune 200 company that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service - Sling TV - that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.<br><br>Now we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.<br><br>We are driven by curiosity, pride, adventure, and a desire to win - it's in our DNA. We're looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.<br><br>Opportunity is here. We are DISH.<br> <br><strong>Job Duties and Responsibilities</strong><br><br><strong>Key Responsibilities:</strong><br><ul><li>As an Engineer for a mobile application team, you will be responsible for the mobility and cloud solutions that our customers and retailers use to transact with DISH's brands</li><li>Work in a fast-paced agile driven extreme programming environment with focus on test driven development and CI/CD</li><li>Translate documented requirements/stories from Rally into mobile tech requirements based on industry best practices</li><li>Solve practical problems and deal with a variety of concrete variables in situations where only limited standardization exists</li></ul> <br><br><strong>Day-to-day Responsibilities:</strong><br><ul><li>Design and build applications for the Android platform to support DISH systems.</li><li>Utilize Google Cloud Platform (GCP) products like Firebase, Firestore, Big Query, Cloud functions, Cloud scheduler, IAM, Pub/Sub, etc. for rapid mobile application development</li><li>Develop CI/CD pipelines that can be adopted for serverless cloud deployments</li><li>Understand &amp; Work on the Stories/Tasks assigned, includes coding and unit test coverage</li><li>Update stories and tasks with status/comments  for accuracy</li><li>As part of Coding/Testing ensure Accessibility is addressed along with following the MR guidelines before merge requests</li><li>Support any production issue as part of your rotation and update Incidents to keep it current/accurate</li><li>As part of the Test cycle, work on the defects related to your area or assigned to you.</li><li>Identify any additional stories/tasks needed and coordinate with Release Lead/PO to get those created/updated </li></ul><strong>Skills, Experience and Requirements</strong><br><br><strong>Education:</strong>  Bachelor's degree in Computer Science or Information Technology or a related discipline<br><br><strong>Skills and Qualifications:</strong><br><br><ul><li>2-4 years experience in managing complex system requirements</li><li>2-4 years experience with Android app store process</li><li>Experience with web technologies</li><li>Experience in product design</li><li>Understanding of UI/UX design work for both web and mobile platforms</li><li>Experience working with remote data via REST and JSON, and third-party libraries and APIs</li><li>Experience with the software development life cycle (SDLC) environment</li><li>Proficient understanding of code versioning tools, such as Git</li><li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li><li>Ability to understand business requirements and translate them into technical requirements</li><li>Experience with Firebase </li></ul> <br><br><strong>Preferred Qualifications:</strong><br><ul><li>Professional experience developing/operating solutions built on AWS</li><li>Experience working within software development or Internet-related industries</li><li>Experience with microservices architectures</li></ul><br><strong>Work Attire: </strong> Business casual<br> <br><strong>Salary Range </strong><br><br>Compensation: $65,800.00/Year - $94,000.00/Year <br><strong> Compensation and  Benefits</strong><br><br>We also offer versatile health perks, including flexible spending accounts, HSA, a 401(k) Plan with company match, ESPP, career opportunities, and a flexible time away plan; all benefits can be viewed here: DISH Benefits. <br><br>The base pay range shown is a guideline. Individual total compensation will vary based on factors such as qualifications, skill level, and competencies; compensation is based on the role's location and is subject to change based on work location. Candidates need to successfully complete a pre-employment screen, which may include a drug test and DMV check.</p>",
    name: "Software Engineer - Mobile Apps - Android",
    type: "external",
    publication_date: "2023-10-05T23:10:31Z",
    short_name: "software-engineer-mobile-apps-android-c94d4d",
    model_type: "jobs",
    id: 12526490,
    locations: [
      {
        name: "Englewood, CO",
      },
    ],
    categories: [
      {
        name: "Education",
      },
    ],
    levels: [
      {
        name: "Mid Level",
        short_name: "mid",
      },
    ],
    tags: [],
    refs: {
      landing_page:
        "https://www.themuse.com/jobs/dish/software-engineer-mobile-apps-android-c94d4d",
    },
    company: {
      id: 15000252,
      short_name: "dish",
      name: "DISH",
    },
  },
  {
    contents:
      "<p><b>CO Salary Range: USD 65,800.00 - 94,000.00 per year</b><br><br><strong>Department Summary</strong><br><br>DISH is a Fortune 200 company that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service - Sling TV - that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.<br><br>Now we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.<br><br>We are driven by curiosity, pride, adventure, and a desire to win - it's in our DNA. We're looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.<br><br>Opportunity is here. We are DISH.<br> <br><strong>Job Duties and Responsibilities</strong><br><br><strong>Key Responsibilities:</strong><br><ul><li>As an Engineer for a mobile application team, you will be responsible for the mobility and cloud solutions that our customers and retailers use to transact with DISH's brands</li><li>Work in a fast-paced agile driven extreme programming environment with focus on test driven development and CI/CD</li><li>Translate documented requirements/stories from Rally into mobile tech requirements based on industry best practices</li><li>Solve practical problems and deal with a variety of concrete variables in situations where only limited standardization exists</li></ul> <br><br><strong>Day-to-day Responsibilities:</strong><br><ul><li>Design and build applications for the Android platform to support DISH systems.</li><li>Utilize Google Cloud Platform (GCP) products like Firebase, Firestore, Big Query, Cloud functions, Cloud scheduler, IAM, Pub/Sub, etc. for rapid mobile application development</li><li>Develop CI/CD pipelines that can be adopted for serverless cloud deployments</li><li>Understand &amp; Work on the Stories/Tasks assigned, includes coding and unit test coverage</li><li>Update stories and tasks with status/comments  for accuracy</li><li>As part of Coding/Testing ensure Accessibility is addressed along with following the MR guidelines before merge requests</li><li>Support any production issue as part of your rotation and update Incidents to keep it current/accurate</li><li>As part of the Test cycle, work on the defects related to your area or assigned to you.</li><li>Identify any additional stories/tasks needed and coordinate with Release Lead/PO to get those created/updated </li></ul><strong>Skills, Experience and Requirements</strong><br><br><strong>Education:</strong>  Bachelor's degree in Computer Science or Information Technology or a related discipline<br><br><strong>Skills and Qualifications:</strong><br><br><ul><li>2-4 years experience in managing complex system requirements</li><li>2-4 years experience with Android app store process</li><li>Experience with web technologies</li><li>Experience in product design</li><li>Understanding of UI/UX design work for both web and mobile platforms</li><li>Experience working with remote data via REST and JSON, and third-party libraries and APIs</li><li>Experience with the software development life cycle (SDLC) environment</li><li>Proficient understanding of code versioning tools, such as Git</li><li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li><li>Ability to understand business requirements and translate them into technical requirements</li><li>Experience with Firebase </li></ul> <br><br><strong>Preferred Qualifications:</strong><br><ul><li>Professional experience developing/operating solutions built on AWS</li><li>Experience working within software development or Internet-related industries</li><li>Experience with microservices architectures</li></ul><br><strong>Work Attire: </strong> Business casual<br> <br><strong>Salary Range </strong><br><br>Compensation: $65,800.00/Year - $94,000.00/Year <br><strong> Compensation and  Benefits</strong><br><br>We also offer versatile health perks, including flexible spending accounts, HSA, a 401(k) Plan with company match, ESPP, career opportunities, and a flexible time away plan; all benefits can be viewed here: DISH Benefits. <br><br>The base pay range shown is a guideline. Individual total compensation will vary based on factors such as qualifications, skill level, and competencies; compensation is based on the role's location and is subject to change based on work location. Candidates need to successfully complete a pre-employment screen, which may include a drug test and DMV check.</p>",
    name: "Software Engineer - Mobile Apps - Android",
    type: "external",
    publication_date: "2023-10-05T23:10:31Z",
    short_name: "software-engineer-mobile-apps-android-c94d4d",
    model_type: "jobs",
    id: 12526490,
    locations: [
      {
        name: "Englewood, CO",
      },
    ],
    categories: [
      {
        name: "Software Engineering",
      },
    ],
    levels: [
      {
        name: "Mid Level",
        short_name: "mid",
      },
    ],
    tags: [],
    refs: {
      landing_page:
        "https://www.themuse.com/jobs/dish/software-engineer-mobile-apps-android-c94d4d",
    },
    company: {
      id: 15000252,
      short_name: "dish",
      name: "DISH",
    },
  },
  {
    contents:
      "<p><b>CO Salary Range: USD 65,800.00 - 94,000.00 per year</b><br><br><strong>Department Summary</strong><br><br>DISH is a Fortune 200 company that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service - Sling TV - that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.<br><br>Now we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.<br><br>We are driven by curiosity, pride, adventure, and a desire to win - it's in our DNA. We're looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.<br><br>Opportunity is here. We are DISH.<br> <br><strong>Job Duties and Responsibilities</strong><br><br><strong>Key Responsibilities:</strong><br><ul><li>As an Engineer for a mobile application team, you will be responsible for the mobility and cloud solutions that our customers and retailers use to transact with DISH's brands</li><li>Work in a fast-paced agile driven extreme programming environment with focus on test driven development and CI/CD</li><li>Translate documented requirements/stories from Rally into mobile tech requirements based on industry best practices</li><li>Solve practical problems and deal with a variety of concrete variables in situations where only limited standardization exists</li></ul> <br><br><strong>Day-to-day Responsibilities:</strong><br><ul><li>Design and build applications for the Android platform to support DISH systems.</li><li>Utilize Google Cloud Platform (GCP) products like Firebase, Firestore, Big Query, Cloud functions, Cloud scheduler, IAM, Pub/Sub, etc. for rapid mobile application development</li><li>Develop CI/CD pipelines that can be adopted for serverless cloud deployments</li><li>Understand &amp; Work on the Stories/Tasks assigned, includes coding and unit test coverage</li><li>Update stories and tasks with status/comments  for accuracy</li><li>As part of Coding/Testing ensure Accessibility is addressed along with following the MR guidelines before merge requests</li><li>Support any production issue as part of your rotation and update Incidents to keep it current/accurate</li><li>As part of the Test cycle, work on the defects related to your area or assigned to you.</li><li>Identify any additional stories/tasks needed and coordinate with Release Lead/PO to get those created/updated </li></ul><strong>Skills, Experience and Requirements</strong><br><br><strong>Education:</strong>  Bachelor's degree in Computer Science or Information Technology or a related discipline<br><br><strong>Skills and Qualifications:</strong><br><br><ul><li>2-4 years experience in managing complex system requirements</li><li>2-4 years experience with Android app store process</li><li>Experience with web technologies</li><li>Experience in product design</li><li>Understanding of UI/UX design work for both web and mobile platforms</li><li>Experience working with remote data via REST and JSON, and third-party libraries and APIs</li><li>Experience with the software development life cycle (SDLC) environment</li><li>Proficient understanding of code versioning tools, such as Git</li><li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li><li>Ability to understand business requirements and translate them into technical requirements</li><li>Experience with Firebase </li></ul> <br><br><strong>Preferred Qualifications:</strong><br><ul><li>Professional experience developing/operating solutions built on AWS</li><li>Experience working within software development or Internet-related industries</li><li>Experience with microservices architectures</li></ul><br><strong>Work Attire: </strong> Business casual<br> <br><strong>Salary Range </strong><br><br>Compensation: $65,800.00/Year - $94,000.00/Year <br><strong> Compensation and  Benefits</strong><br><br>We also offer versatile health perks, including flexible spending accounts, HSA, a 401(k) Plan with company match, ESPP, career opportunities, and a flexible time away plan; all benefits can be viewed here: DISH Benefits. <br><br>The base pay range shown is a guideline. Individual total compensation will vary based on factors such as qualifications, skill level, and competencies; compensation is based on the role's location and is subject to change based on work location. Candidates need to successfully complete a pre-employment screen, which may include a drug test and DMV check.</p>",
    name: "Rando Engineer - Mobile Apps - Android",
    type: "external",
    publication_date: "2023-10-15T23:10:31Z",
    short_name: "software-engineer-mobile-apps-android-c94d4d",
    model_type: "jobs",
    id: 12526490,
    locations: [
      {
        name: "Englewood, CO",
      },
    ],
    categories: [
      {
        name: "Software Engineering",
      },
    ],
    levels: [
      {
        name: "Mid Level",
        short_name: "mid",
      },
    ],
    tags: [],
    refs: {
      landing_page:
        "https://www.themuse.com/jobs/dish/software-engineer-mobile-apps-android-c94d4d",
    },
    company: {
      id: 15000252,
      short_name: "dish",
      name: "DISH",
    },
  },
  {
    contents:
      "<p><b>CO Salary Range: USD 65,800.00 - 94,000.00 per year</b><br><br><strong>Department Summary</strong><br><br>DISH is a Fortune 200 company that continues to redefine the communications industry. Our legacy is innovation and a willingness to challenge the status quo, including reinventing ourselves. We disrupted the pay-TV industry in the mid-90s with the launch of the DISH satellite TV service, taking on some of the largest U.S. corporations in the process, and grew to be the fourth-largest pay-TV provider. We are doing it again with the first live, internet-delivered TV service - Sling TV - that bucks traditional pay-TV norms and gives consumers a truly new way to access and watch television.<br><br>Now we have our sights set on upending the wireless industry and unseating the entrenched incumbent carriers.<br><br>We are driven by curiosity, pride, adventure, and a desire to win - it's in our DNA. We're looking for people with boundless energy, intelligence, and an overwhelming need to achieve to join our team as we embark on the next chapter of our story.<br><br>Opportunity is here. We are DISH.<br> <br><strong>Job Duties and Responsibilities</strong><br><br><strong>Key Responsibilities:</strong><br><ul><li>As an Engineer for a mobile application team, you will be responsible for the mobility and cloud solutions that our customers and retailers use to transact with DISH's brands</li><li>Work in a fast-paced agile driven extreme programming environment with focus on test driven development and CI/CD</li><li>Translate documented requirements/stories from Rally into mobile tech requirements based on industry best practices</li><li>Solve practical problems and deal with a variety of concrete variables in situations where only limited standardization exists</li></ul> <br><br><strong>Day-to-day Responsibilities:</strong><br><ul><li>Design and build applications for the Android platform to support DISH systems.</li><li>Utilize Google Cloud Platform (GCP) products like Firebase, Firestore, Big Query, Cloud functions, Cloud scheduler, IAM, Pub/Sub, etc. for rapid mobile application development</li><li>Develop CI/CD pipelines that can be adopted for serverless cloud deployments</li><li>Understand &amp; Work on the Stories/Tasks assigned, includes coding and unit test coverage</li><li>Update stories and tasks with status/comments  for accuracy</li><li>As part of Coding/Testing ensure Accessibility is addressed along with following the MR guidelines before merge requests</li><li>Support any production issue as part of your rotation and update Incidents to keep it current/accurate</li><li>As part of the Test cycle, work on the defects related to your area or assigned to you.</li><li>Identify any additional stories/tasks needed and coordinate with Release Lead/PO to get those created/updated </li></ul><strong>Skills, Experience and Requirements</strong><br><br><strong>Education:</strong>  Bachelor's degree in Computer Science or Information Technology or a related discipline<br><br><strong>Skills and Qualifications:</strong><br><br><ul><li>2-4 years experience in managing complex system requirements</li><li>2-4 years experience with Android app store process</li><li>Experience with web technologies</li><li>Experience in product design</li><li>Understanding of UI/UX design work for both web and mobile platforms</li><li>Experience working with remote data via REST and JSON, and third-party libraries and APIs</li><li>Experience with the software development life cycle (SDLC) environment</li><li>Proficient understanding of code versioning tools, such as Git</li><li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li><li>Ability to understand business requirements and translate them into technical requirements</li><li>Experience with Firebase </li></ul> <br><br><strong>Preferred Qualifications:</strong><br><ul><li>Professional experience developing/operating solutions built on AWS</li><li>Experience working within software development or Internet-related industries</li><li>Experience with microservices architectures</li></ul><br><strong>Work Attire: </strong> Business casual<br> <br><strong>Salary Range </strong><br><br>Compensation: $65,800.00/Year - $94,000.00/Year <br><strong> Compensation and  Benefits</strong><br><br>We also offer versatile health perks, including flexible spending accounts, HSA, a 401(k) Plan with company match, ESPP, career opportunities, and a flexible time away plan; all benefits can be viewed here: DISH Benefits. <br><br>The base pay range shown is a guideline. Individual total compensation will vary based on factors such as qualifications, skill level, and competencies; compensation is based on the role's location and is subject to change based on work location. Candidates need to successfully complete a pre-employment screen, which may include a drug test and DMV check.</p>",
    name: "Developer - Mobile Apps - Android",
    type: "external",
    publication_date: "2023-10-02T23:10:31Z",
    short_name: "software-engineer-mobile-apps-android-c94d4d",
    model_type: "jobs",
    id: 12526490,
    locations: [
      {
        name: "Englewood, CO",
      },
    ],
    categories: [
      {
        name: "Software Engineering",
      },
    ],
    levels: [
      {
        name: "Mid Level",
        short_name: "mid",
      },
    ],
    tags: [],
    refs: {
      landing_page:
        "https://www.themuse.com/jobs/dish/software-engineer-mobile-apps-android-c94d4d",
    },
    company: {
      id: 15000252,
      short_name: "dish",
      name: "DISH",
    },
  },
];

type filterType = {
  name: string;
};

export const FilterTags: filterType[] = [
  { name: "All" },
  { name: "Tech" },
  { name: "Education" },
  { name: "Science" },
  { name: "Realtor" },
  { name: "Engineering" },
];

export const BookmarkTemp = {
  contents: "",
  name: "",
  type: "",
  publication_date: "",
  short_name: "",
  model_type: "",
  id: 0,
  locations: [
    {
      name: "",
    },
  ],
  categories: [
    {
      name: "",
    },
  ],
  levels: [
    {
      name: "",
      short_name: "",
    },
  ],
  tags: [],
  refs: {
    landing_page: "",
  },
  company: {
    id: 0,
    short_name: "",
    name: "",
  },
};
