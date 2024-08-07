import React, { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar,
  Divider,
  Box,
  Switch,
  IconButton,
  Tooltip,
  Zoom,
  Fab,
  Pagination,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const users = [
   
  {
   "createdAt": "2021-12-17T10:04:31.795Z",
   "avatar": "https://cdn.fakercloud.com/avatars/dgclegg_128.jpg",
   "Bio": "Est aut sed temporibus hic natus mollitia.",
    "jobTitle": "National Accountability Architect",
    "profile": {
      "username": "Travis.Shanahan",
      "firstName": "Hans",
      "lastName": "Connelly",
      "email": "Jena33@gmail.com"
    },
    "id": "2"
  },
  {
    "createdAt": "2021-12-17T03:08:36.874Z",
    "avatar": "https://cdn.fakercloud.com/avatars/d00maz_128.jpg",
    "Bio": "Sit ipsa nihil ratione.",
    "jobTitle": "Regional Branding Orchestrator",
    "profile": {
      "username": "Marlene8",
      "firstName": "Filomena",
      "lastName": "Farrell",
      "email": "Philip22@gmail.com"
    },
    "id": "3"
  },
  {
    "createdAt": "2021-12-17T00:02:23.768Z",
    "avatar": "https://cdn.fakercloud.com/avatars/chatyrko_128.jpg",
    "Bio": "Voluptate quia tenetur iste iure minus accusamus dolorem.",
    "jobTitle": "International Paradigm Engineer",
    "profile": {
      "username": "Elvie.Stamm99",
      "firstName": "Ubaldo",
      "lastName": "Waelchi",
      "email": "Javier.Raynor@gmail.com"
    },
    "id": "4"
  },
  {
    "createdAt": "2021-12-17T10:50:38.375Z",
    "avatar": "https://cdn.fakercloud.com/avatars/kurtinc_128.jpg",
    "Bio": "Est sapiente id vel.",
    "jobTitle": "Legacy Interactions Coordinator",
    "profile": {
      "username": "Norwood_Oberbrunner87",
      "firstName": "Marlon",
      "lastName": "Mitchell",
      "email": "Ursula77@gmail.com"
    },
    "id": "5"
  },
  {
    "createdAt": "2021-12-16T13:57:08.429Z",
    "avatar": "https://cdn.fakercloud.com/avatars/jennyyo_128.jpg",
    "Bio": "Delectus neque dolore.",
    "jobTitle": "District Intranet Consultant",
    "profile": {
      "username": "Naomie15",
      "firstName": "Carroll",
      "lastName": "West",
      "email": "Hosea_Gottlieb46@gmail.com"
    },
    "id": "6"
  },
  {
    "createdAt": "2021-12-16T22:34:32.148Z",
    "avatar": "https://cdn.fakercloud.com/avatars/ernestsemerda_128.jpg",
    "Bio": "Temporibus consequatur delectus ex nam repellat enim.",
    "jobTitle": "Regional Group Orchestrator",
    "profile": {
      "username": "Kevon81",
      "firstName": "Yadira",
      "lastName": "Anderson",
      "email": "Amanda38@yahoo.com"
    },
    "id": "7"
  },
  {
    "createdAt": "2021-12-17T12:22:42.766Z",
    "avatar": "https://cdn.fakercloud.com/avatars/iamglimy_128.jpg",
    "Bio": "Consectetur molestiae cum nulla voluptatem.",
    "jobTitle": "Legacy Security Producer",
    "profile": {
      "username": "Josue.Turcotte83",
      "firstName": "Emil",
      "lastName": "Hermann",
      "email": "Destany59@gmail.com"
    },
    "id": "8"
  },
  {
    "createdAt": "2021-12-16T14:20:48.288Z",
    "avatar": "https://cdn.fakercloud.com/avatars/betraydan_128.jpg",
    "Bio": "Voluptatem dolores tenetur neque in porro.",
    "jobTitle": "Product Accountability Director",
    "profile": {
      "username": "Viviane.Pfannerstill",
      "firstName": "Caden",
      "lastName": "Turcotte",
      "email": "Kali66@hotmail.com"
    },
    "id": "9"
  },
  {
    "createdAt": "2022-02-22T09:37:56.114Z",
    "avatar": "https://cdn.fakercloud.com/avatars/nomidesigns_128.jpg",
    "Bio": "Consequatur explicabo officiis.",
    "jobTitle": "Central Communications Supervisor",
    "profile": {
      "username": "Emilia96",
      "firstName": "Robert",
      "lastName": "Howe",
      "email": "Andy_Kozey@hotmail.com"
    },
    "id": "10"
  },
  {
    "createdAt": "2023-02-12T13:11:49.759Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/81.jpg",
    "Bio": "Odit placeat eaque animi incidunt itaque.",
    "jobTitle": "Investor Quality Supervisor",
    "profile": {
      "username": "Gerda.Keeling",
      "firstName": "Cassidy",
      "lastName": "Nicolas",
      "email": "Rollin_Ledner@yahoo.com"
    },
    "id": "11"
  },
  {
    "createdAt": "2023-02-12T15:26:01.251Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/262.jpg",
    "Bio": "Iste ea ipsa hic a occaecati voluptatibus aperiam.",
    "jobTitle": "Central Quality Producer",
    "profile": {
      "username": "Zachariah9",
      "firstName": "Verner",
      "lastName": "Borer",
      "email": "Marlee.Krajcik@hotmail.com"
    },
    "id": "12"
  },
  {
    "createdAt": "2023-02-12T20:08:50.796Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg",
    "Bio": "Aliquam aliquid fugiat illo ducimus pariatur veritatis error exercitationem.",
    "jobTitle": "Central Configuration Strategist",
    "profile": {
      "username": "Sammy44",
      "firstName": "Braulio",
      "lastName": "Ankunding",
      "email": "Sebastian_Block82@hotmail.com"
    },
    "id": "12"
  },
  {
    "createdAt": "2023-02-12T13:02:45.561Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/963.jpg",
    "Bio": "Consequatur ad recusandae ipsum eos eum in quis nobis.",
    "jobTitle": "Human Creative Agent",
    "profile": {
      "username": "Isadore.Hermann",
      "firstName": "Fermin",
      "lastName": "Bruen",
      "email": "Ellen_Brakus60@hotmail.com"
    },
    "id": "13"
  },
  {
    "createdAt": "2023-02-13T03:30:17.047Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
    "Bio": "Corporis hic aliquid error eveniet voluptate.",
    "jobTitle": "Regional Markets Director",
    "profile": {
      "username": "Dejuan.Lehner",
      "firstName": "Mallory",
      "lastName": "Towne",
      "email": "Rickie.Metz0@gmail.com"
    },
    "id": "14"
  },
  {
    "createdAt": "2023-02-13T06:13:35.294Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/669.jpg",
    "Bio": "Ipsa enim recusandae modi necessitatibus earum incidunt nobis maiores voluptatem.",
    "jobTitle": "Central Web Executive",
    "profile": {
      "username": "Ozella.Hessel",
      "firstName": "Harmony",
      "lastName": "Walsh",
      "email": "Hassie.Gislason19@gmail.com"
    },
    "id": "15"
  },
  {
    "createdAt": "2023-02-13T11:43:49.777Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/455.jpg",
    "Bio": "Cum est officia dolorum dolorum facere tempora suscipit placeat.",
    "jobTitle": "Dynamic Integration Orchestrator",
    "profile": {
      "username": "Ruben_Bechtelar4",
      "firstName": "Cleve",
      "lastName": "Strosin",
      "email": "Bo_Von15@hotmail.com"
    },
    "id": "17"
  },
  {
    "createdAt": "2023-02-13T02:20:09.644Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/174.jpg",
    "Bio": "Dicta placeat doloremque amet.",
    "jobTitle": "Global Communications Technician",
    "profile": {
      "username": "Delilah.Mann",
      "firstName": "Eriberto",
      "lastName": "Moen",
      "email": "Alicia_Veum30@yahoo.com"
    },
    "id": "18"
  },
  {
    "createdAt": "2023-02-12T12:56:21.784Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1134.jpg",
    "Bio": "Ex magni repudiandae quod quod nisi voluptate doloremque esse.",
    "jobTitle": "Internal Quality Executive",
    "profile": {
      "username": "Johnnie.Fadel",
      "firstName": "Shane",
      "lastName": "Blanda",
      "email": "Vivianne_Hayes@gmail.com"
    },
    "id": "19"
  },
  {
    "createdAt": "2023-02-12T19:04:53.480Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/277.jpg",
    "Bio": "Quidem ullam nisi.",
    "jobTitle": "Dynamic Accountability Facilitator",
    "profile": {
      "username": "Jason_Rippin",
      "firstName": "Benedict",
      "lastName": "Botsford",
      "email": "Shyanne.Terry@hotmail.com"
    },
    "id": "20"
  },
  {
    "createdAt": "2023-02-13T02:16:07.876Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/225.jpg",
    "Bio": "Voluptatibus ex doloremque similique.",
    "jobTitle": "Senior Security Producer",
    "profile": {
      "username": "Hertha21",
      "firstName": "Jarrett",
      "lastName": "Nolan",
      "email": "Clyde.Kulas@gmail.com"
    },
    "id": "21"
  },
  {
    "createdAt": "2023-02-12T18:47:25.351Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/418.jpg",
    "Bio": "Ad corrupti saepe repellat fuga nemo possimus explicabo.",
    "jobTitle": "Principal Functionality Technician",
    "profile": {
      "username": "Raven16",
      "firstName": "Akeem",
      "lastName": "Simonis",
      "email": "Mason.Spinka38@yahoo.com"
    },
    "id": "22"
  },
  {
    "createdAt": "2023-02-12T15:08:18.746Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/304.jpg",
    "Bio": "Itaque ea voluptatem cupiditate facilis quaerat fugiat enim.",
    "jobTitle": "Chief Accountability Analyst",
    "profile": {
      "username": "Baylee_Konopelski96",
      "firstName": "Justine",
      "lastName": "Trantow",
      "email": "Itzel88@hotmail.com"
    },
    "id": "23"
  },
  {
    "createdAt": "2023-02-13T00:46:29.902Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/188.jpg",
    "Bio": "Culpa ab in deleniti dolorum omnis est expedita repellendus.",
    "jobTitle": "Global Assurance Representative",
    "profile": {
      "username": "Grayce69",
      "firstName": "Terry",
      "lastName": "Langosh",
      "email": "Samson_Larkin@hotmail.com"
    },
    "id": "23"
  },
  {
    "createdAt": "2023-02-12T19:11:56.639Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/426.jpg",
    "Bio": "Nihil delectus perspiciatis delectus a nostrum vitae.",
    "jobTitle": "Chief Program Coordinator",
    "profile": {
      "username": "Ardith_Macejkovic",
      "firstName": "Anastasia",
      "lastName": "Rohan",
      "email": "Laron_Abernathy70@hotmail.com"
    },
    "id": "26"
  },
  {
    "createdAt": "2023-02-13T03:35:30.525Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/733.jpg",
    "Bio": "Asperiores voluptate tenetur perspiciatis ullam quis neque necessitatibus et.",
    "jobTitle": "Legacy Data Director",
    "profile": {
      "username": "Domenica.Robel88",
      "firstName": "Candelario",
      "lastName": "Treutel",
      "email": "Amely_Barton32@yahoo.com"
    },
    "id": "27"
  },
  {
    "createdAt": "2023-02-12T23:15:11.130Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/146.jpg",
    "Bio": "Laudantium ullam rerum natus.",
    "jobTitle": "Customer Group Manager",
    "profile": {
      "username": "Haylee44",
      "firstName": "Vincent",
      "lastName": "Simonis",
      "email": "Stuart_Rodriguez9@hotmail.com"
    },
    "id": "28"
  },
  {
    "createdAt": "2023-02-12T14:11:57.128Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1193.jpg",
    "Bio": "Porro animi modi veniam dolor deserunt distinctio.",
    "jobTitle": "Dynamic Optimization Assistant",
    "profile": {
      "username": "Irma.Friesen63",
      "firstName": "Shane",
      "lastName": "Dicki",
      "email": "Moses_Lakin@hotmail.com"
    },
    "id": "29"
  },
  {
    "createdAt": "2023-02-13T04:05:44.975Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/989.jpg",
    "Bio": "Sunt commodi officiis occaecati aut voluptatibus ut sunt totam.",
    "jobTitle": "Chief Accountability Manager",
    "profile": {
      "username": "Amelia_Hintz",
      "firstName": "Crystel",
      "lastName": "Brakus",
      "email": "Kale_Schneider42@gmail.com"
    },
    "id": "30"
  },
  {
    "createdAt": "2023-02-13T11:36:23.965Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg",
    "Bio": "Ipsum neque repudiandae soluta.",
    "jobTitle": "Future Identity Architect",
    "profile": {
      "username": "Ofelia50",
      "firstName": "Damaris",
      "lastName": "Schoen",
      "email": "Abe22@gmail.com"
    },
    "id": "31"
  },
  {
    "createdAt": "2023-02-12T19:26:13.547Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/339.jpg",
    "Bio": "Rem totam fugit id quo.",
    "jobTitle": "Chief Interactions Supervisor",
    "profile": {
      "username": "Jennyfer18",
      "firstName": "Heidi",
      "lastName": "Cartwright",
      "email": "Jackeline21@yahoo.com"
    },
    "id": "32"
  },
  {
    "createdAt": "2023-02-13T05:25:29.096Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1013.jpg",
    "Bio": "Accusamus vero a tenetur ullam suscipit explicabo odit eligendi.",
    "jobTitle": "Chief Data Executive",
    "profile": {
      "username": "Reina.Turner",
      "firstName": "Jordon",
      "lastName": "O'Hara",
      "email": "Caitlyn48@gmail.com"
    },
    "id": "33"
  },
  {
    "createdAt": "2023-02-12T19:27:39.668Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/354.jpg",
    "Bio": "Atque minus quo mollitia quod eos placeat rem quos est.",
    "jobTitle": "Legacy Tactics Supervisor",
    "profile": {
      "username": "Frances57",
      "firstName": "Verlie",
      "lastName": "Hickle",
      "email": "Meta_Upton@hotmail.com"
    },
    "id": "34"
  },
  {
    "createdAt": "2023-02-13T05:01:40.581Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/464.jpg",
    "Bio": "Fugit nulla temporibus reiciendis corporis cupiditate asperiores maiores.",
    "jobTitle": "Chief Creative Liaison",
    "profile": {
      "username": "Mac26",
      "firstName": "Rosalind",
      "lastName": "Johnston",
      "email": "Destiney.Smith19@hotmail.com"
    },
    "id": "35"
  },
  {
    "createdAt": "2023-02-13T12:14:07.943Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/39.jpg",
    "Bio": "Totam laborum nobis officiis saepe molestiae odio dolore natus assumenda.",
    "jobTitle": "International Group Facilitator",
    "profile": {
      "username": "Mckenna_Heathcote47",
      "firstName": "Jamarcus",
      "lastName": "Reichert",
      "email": "Kasandra.Bartoletti@gmail.com"
    },
    "id": "36"
  },
  {
    "createdAt": "2023-02-13T10:16:36.781Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/110.jpg",
    "Bio": "Laborum laborum unde animi.",
    "jobTitle": "Customer Metrics Analyst",
    "profile": {
      "username": "Derrick_Stokes37",
      "firstName": "Cecelia",
      "lastName": "Fay",
      "email": "Michael.Brown@gmail.com"
    },
    "id": "37"
  },
  {
    "createdAt": "2023-02-12T18:47:10.468Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg",
    "Bio": "Ipsa laboriosam aliquam magnam asperiores suscipit enim quae reprehenderit blanditiis.",
    "jobTitle": "Internal Paradigm Orchestrator",
    "profile": {
      "username": "Jeremy.Hudson3",
      "firstName": "Elza",
      "lastName": "Schroeder",
      "email": "Danielle84@yahoo.com"
    },
    "id": "38"
  },
  {
    "createdAt": "2023-02-13T01:32:30.810Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg",
    "Bio": "Nesciunt repudiandae suscipit accusantium vel.",
    "jobTitle": "Principal Creative Producer",
    "profile": {
      "username": "Violette75",
      "firstName": "Dedric",
      "lastName": "Koelpin",
      "email": "Carmel_Armstrong49@yahoo.com"
    },
    "id": "39"
  },
  {
    "createdAt": "2023-02-12T15:51:24.523Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/466.jpg",
    "Bio": "Tempora nam modi iure harum reprehenderit laboriosam expedita.",
    "jobTitle": "Regional Data Specialist",
    "profile": {
      "username": "Derek50",
      "firstName": "Claudie",
      "lastName": "Bailey",
      "email": "Whitney_Nolan@hotmail.com"
    },
    "id": "40"
  },
  {
    "createdAt": "2023-02-13T08:18:24.933Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/912.jpg",
    "Bio": "Repellendus tempore officiis non et eligendi nemo.",
    "jobTitle": "National Identity Engineer",
    "profile": {
      "username": "Eileen14",
      "firstName": "Ramon",
      "lastName": "Renner",
      "email": "Maiya.Reynolds43@hotmail.com"
    },
    "id": "41"
  },
  {
    "createdAt": "2023-02-13T06:15:24.079Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/814.jpg",
    "Bio": "Voluptatem rem dolorum voluptatibus assumenda tempora.",
    "jobTitle": "Internal Mobility Facilitator",
    "profile": {
      "username": "Nyah_Schneider48",
      "firstName": "Breana",
      "lastName": "Stamm",
      "email": "Shea89@hotmail.com"
    },
    "id": "42"
  },
  {
    "createdAt": "2023-02-12T19:50:59.823Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg",
    "Bio": "Temporibus explicabo dolorem.",
    "jobTitle": "Lead Security Engineer",
    "profile": {
      "username": "Taylor_Hoeger26",
      "firstName": "Lurline",
      "lastName": "Halvorson",
      "email": "Erwin.Zboncak32@hotmail.com"
    },
    "id": "43"
  },
  {
    "createdAt": "2023-02-13T01:44:13.332Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/321.jpg",
    "Bio": "Numquam laudantium ratione fugiat labore.",
    "jobTitle": "District Communications Developer",
    "profile": {
      "username": "Emerson21",
      "firstName": "Zack",
      "lastName": "Bashirian",
      "email": "Dayana.McLaughlin86@gmail.com"
    },
    "id": "43"
  },
  {
    "createdAt": "2023-02-13T12:08:10.057Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    "Bio": "Omnis officia ratione.",
    "jobTitle": "Forward Implementation Strategist",
    "profile": {
      "username": "Cordia_Larkin",
      "firstName": "Skylar",
      "lastName": "Bins",
      "email": "Giuseppe_Sporer@yahoo.com"
    },
    "id": "44"
  },
  {
    "createdAt": "2023-02-12T19:03:13.445Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1144.jpg",
    "Bio": "Perferendis tempora corrupti nemo veritatis.",
    "jobTitle": "Legacy Paradigm Coordinator",
    "profile": {
      "username": "Clemmie.Hermiston",
      "firstName": "Ubaldo",
      "lastName": "Trantow",
      "email": "Chaim.Krajcik@gmail.com"
    },
    "id": "45"
  },
  {
    "createdAt": "2023-02-13T06:01:37.856Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/91.jpg",
    "Bio": "Exercitationem ex nihil eaque.",
    "jobTitle": "National Applications Coordinator",
    "profile": {
      "username": "Sammy.Langworth41",
      "firstName": "Hailee",
      "lastName": "Hickle",
      "email": "Cade_Conroy@hotmail.com"
    },
    "id": "46"
  },
  {
    "createdAt": "2023-02-13T00:12:00.391Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/816.jpg",
    "Bio": "Exercitationem ducimus ex.",
    "jobTitle": "Regional Quality Manager",
    "profile": {
      "username": "Chesley_Lemke49",
      "firstName": "Maia",
      "lastName": "Kovacek",
      "email": "Jasper.Grady2@gmail.com"
    },
    "id": "47"
  },
  {
    "createdAt": "2023-02-12T15:43:24.392Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/891.jpg",
    "Bio": "Voluptatem natus minus blanditiis aliquam amet.",
    "jobTitle": "District Directives Assistant",
    "profile": {
      "username": "Ivah_Pouros",
      "firstName": "Herman",
      "lastName": "Hessel",
      "email": "Sylvia_Effertz@hotmail.com"
    },
    "id": "48"
  },
  {
    "createdAt": "2023-02-12T18:41:30.339Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/519.jpg",
    "Bio": "Pariatur incidunt tempora praesentium numquam sit perspiciatis.",
    "jobTitle": "Dynamic Response Officer",
    "profile": {
      "username": "Kale.Dach",
      "firstName": "Alysson",
      "lastName": "Gusikowski",
      "email": "Lessie64@hotmail.com"
    },
    "id": "49"
  },
  {
    "createdAt": "2023-02-12T17:40:52.132Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/238.jpg",
    "Bio": "Ab alias ab perferendis soluta sequi impedit facere.",
    "jobTitle": "Central Solutions Executive",
    "profile": {
      "username": "Friedrich.Morar18",
      "firstName": "Amely",
      "lastName": "Schoen",
      "email": "Kiley.Blick94@gmail.com"
    },
    "id": "50"
  },
  {
    "createdAt": "2023-02-12T20:27:18.745Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg",
    "Bio": "Accusantium ipsum similique ea debitis.",
    "jobTitle": "Internal Tactics Producer",
    "profile": {
      "username": "Pansy_Collins42",
      "firstName": "Korey",
      "lastName": "Will",
      "email": "Daren_Morar84@hotmail.com"
    },
    "id": "51"
  },
  {
    "createdAt": "2023-02-12T18:51:45.687Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/245.jpg",
    "Bio": "Cupiditate nostrum nostrum.",
    "jobTitle": "Dynamic Creative Representative",
    "profile": {
      "username": "Kory60",
      "firstName": "Ashtyn",
      "lastName": "Corwin",
      "email": "Amiya56@yahoo.com"
    },
    "id": "52"
  },
  {
    "createdAt": "2023-02-13T05:04:20.086Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/508.jpg",
    "Bio": "Blanditiis beatae asperiores blanditiis.",
    "jobTitle": "Human Operations Director",
    "profile": {
      "username": "Henri_Reichert62",
      "firstName": "Christina",
      "lastName": "VonRueden",
      "email": "Edmond.Jacobi56@gmail.com"
    },
    "id": "53"
  },
  {
    "createdAt": "2023-02-12T22:30:03.756Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg",
    "Bio": "Amet blanditiis fuga nobis facilis.",
    "jobTitle": "Human Creative Strategist",
    "profile": {
      "username": "Lorenza19",
      "firstName": "Garth",
      "lastName": "Kihn",
      "email": "Carolyne.Nader@gmail.com"
    },
    "id": "54"
  },
  {
    "createdAt": "2023-02-13T03:53:44.396Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/79.jpg",
    "Bio": "Consectetur ipsum assumenda vel assumenda maiores.",
    "jobTitle": "International Program Associate",
    "profile": {
      "username": "Jermain_Blick",
      "firstName": "Gwen",
      "lastName": "Dicki",
      "email": "Andrew18@yahoo.com"
    },
    "id": "55"
  },
  {
    "createdAt": "2023-02-12T13:15:20.132Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/878.jpg",
    "Bio": "Provident quo asperiores nulla.",
    "jobTitle": "Senior Web Consultant",
    "profile": {
      "username": "Armando.Kemmer",
      "firstName": "Lavon",
      "lastName": "Boyer",
      "email": "Laurel85@gmail.com"
    },
    "id": "56"
  },
  {
    "createdAt": "2023-02-13T10:56:24.828Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/618.jpg",
    "Bio": "Voluptatum similique eius fuga quo laborum.",
    "jobTitle": "Lead Metrics Planner",
    "profile": {
      "username": "Skye_Haley55",
      "firstName": "Maryse",
      "lastName": "Witting",
      "email": "Kendall45@hotmail.com"
    },
    "id": "57"
  },
  {
    "createdAt": "2023-02-13T06:52:24.897Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/556.jpg",
    "Bio": "Dolor sed consequatur.",
    "jobTitle": "Senior Response Manager",
    "profile": {
      "username": "Emilie61",
      "firstName": "Orval",
      "lastName": "Russel",
      "email": "Art.Bechtelar60@gmail.com"
    },
    "id": "58"
  },
  {
    "createdAt": "2023-02-13T03:59:50.856Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/793.jpg",
    "Bio": "Doloremque aspernatur quae dolores vitae ratione provident aperiam minus earum.",
    "jobTitle": "Human Creative Representative",
    "profile": {
      "username": "Alanis.Jacobson",
      "firstName": "Reymundo",
      "lastName": "Miller",
      "email": "Willard_Raynor@gmail.com"
    },
    "id": "59"
  },
  {
    "createdAt": "2023-02-13T05:39:41.934Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
    "Bio": "Voluptatem adipisci laboriosam modi soluta.",
    "jobTitle": "Forward Research Officer",
    "profile": {
      "username": "Fiona6",
      "firstName": "Neoma",
      "lastName": "O'Kon",
      "email": "Curtis_Parker54@yahoo.com"
    },
    "id": "60"
  },
  {
    "createdAt": "2023-02-12T18:10:36.576Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
    "Bio": "Ipsum voluptas veniam eligendi aperiam necessitatibus possimus autem vero.",
    "jobTitle": "Human Markets Analyst",
    "profile": {
      "username": "Danika6",
      "firstName": "Genevieve",
      "lastName": "Ernser",
      "email": "Gussie65@hotmail.com"
    },
    "id": "61"
  },
  {
    "createdAt": "2023-02-13T01:16:56.953Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/539.jpg",
    "Bio": "Blanditiis eius sequi suscipit molestiae aut at nihil.",
    "jobTitle": "Internal Quality Supervisor",
    "profile": {
      "username": "Raymundo67",
      "firstName": "Dillan",
      "lastName": "Pollich",
      "email": "Jacklyn26@gmail.com"
    },
    "id": "62"
  },
  {
    "createdAt": "2023-02-12T21:53:02.419Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg",
    "Bio": "Nobis tempora quasi incidunt perferendis aperiam id sequi quas magni.",
    "jobTitle": "Principal Mobility Liaison",
    "profile": {
      "username": "Lysanne44",
      "firstName": "Mia",
      "lastName": "Pacocha",
      "email": "Osborne.Towne22@yahoo.com"
    },
    "id": "63"
  },
  {
    "createdAt": "2023-02-13T01:29:49.617Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg",
    "Bio": "Est at enim tempore amet exercitationem tenetur cupiditate facilis.",
    "jobTitle": "Customer Creative Officer",
    "profile": {
      "username": "Elton_Emmerich4",
      "firstName": "Lydia",
      "lastName": "Medhurst",
      "email": "Britney.Walter@yahoo.com"
    },
    "id": "64"
  },
  {
    "createdAt": "2023-02-13T12:30:56.973Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg",
    "Bio": "Voluptas doloribus delectus ut architecto dignissimos esse voluptatem.",
    "jobTitle": "Forward Optimization Supervisor",
    "profile": {
      "username": "Thomas.Metz87",
      "firstName": "Clovis",
      "lastName": "Waelchi",
      "email": "Marilie.Tremblay22@hotmail.com"
    },
    "id": "65"
  },
  {
    "createdAt": "2023-02-13T07:19:38.870Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/172.jpg",
    "Bio": "Blanditiis nesciunt architecto molestiae qui quia consectetur vitae alias.",
    "jobTitle": "Customer Accounts Assistant",
    "profile": {
      "username": "Gideon_Brekke18",
      "firstName": "Santiago",
      "lastName": "Hills",
      "email": "David.Braun@hotmail.com"
    },
    "id": "66"
  },
  {
    "createdAt": "2023-02-13T06:30:03.786Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/71.jpg",
    "Bio": "Expedita at culpa eum distinctio corrupti.",
    "jobTitle": "Senior Quality Planner",
    "profile": {
      "username": "Alejandrin91",
      "firstName": "Stanton",
      "lastName": "Marquardt",
      "email": "Eula_Lehner@hotmail.com"
    },
    "id": "67"
  },
  {
    "createdAt": "2023-02-13T10:54:31.618Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg",
    "Bio": "Illo sed occaecati exercitationem rerum rerum.",
    "jobTitle": "Legacy Web Consultant",
    "profile": {
      "username": "Belle58",
      "firstName": "Price",
      "lastName": "Murphy",
      "email": "Ciara.Miller@gmail.com"
    },
    "id": "68"
  },
  {
    "createdAt": "2023-02-12T16:28:39.312Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/220.jpg",
    "Bio": "Hic veritatis ea eveniet.",
    "jobTitle": "National Creative Consultant",
    "profile": {
      "username": "Aliza70",
      "firstName": "Zena",
      "lastName": "Bednar",
      "email": "Robert_Thompson56@gmail.com"
    },
    "id": "68"
  },
  {
    "createdAt": "2023-02-12T15:18:45.706Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg",
    "Bio": "Officiis aperiam et occaecati ullam nemo ut temporibus similique.",
    "jobTitle": "Lead Assurance Producer",
    "profile": {
      "username": "Laney_Robel",
      "firstName": "Kennedi",
      "lastName": "Harvey",
      "email": "Josianne.Parisian6@hotmail.com"
    },
    "id": "69"
  },
  {
    "createdAt": "2023-02-13T00:19:39.603Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    "Bio": "Quo quam maiores.",
    "jobTitle": "International Metrics Analyst",
    "profile": {
      "username": "Katrine82",
      "firstName": "Adelbert",
      "lastName": "Parisian",
      "email": "Zack_Jast58@yahoo.com"
    },
    "id": "70"
  },
  {
    "createdAt": "2023-02-13T02:59:39.167Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg",
    "Bio": "Minima aperiam harum consectetur aperiam odio culpa.",
    "jobTitle": "Global Branding Developer",
    "profile": {
      "username": "Mallory_Lockman",
      "firstName": "Timmothy",
      "lastName": "Schinner",
      "email": "Allie34@hotmail.com"
    },
    "id": "71"
  },
  {
    "createdAt": "2023-02-13T00:18:32.723Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg",
    "Bio": "Aperiam laudantium ducimus aut perferendis.",
    "jobTitle": "Principal Integration Executive",
    "profile": {
      "username": "Randal.Green",
      "firstName": "Rylan",
      "lastName": "Monahan",
      "email": "Lorine_Volkman@yahoo.com"
    },
    "id": "71"
  },
  {
    "createdAt": "2023-02-13T10:29:04.969Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/813.jpg",
    "Bio": "Provident iure aut necessitatibus nobis omnis perferendis.",
    "jobTitle": "Dynamic Program Orchestrator",
    "profile": {
      "username": "Garry_Treutel",
      "firstName": "Adah",
      "lastName": "Sawayn",
      "email": "Deshaun75@gmail.com"
    },
    "id": "72"
  },
  {
    "createdAt": "2023-02-12T18:06:29.365Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/175.jpg",
    "Bio": "Qui exercitationem sed ea fugiat.",
    "jobTitle": "Senior Directives Assistant",
    "profile": {
      "username": "Rex46",
      "firstName": "Maude",
      "lastName": "Powlowski",
      "email": "Tabitha.Crona@gmail.com"
    },
    "id": "73"
  },
  {
    "createdAt": "2023-02-12T21:42:58.409Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg",
    "Bio": "Quas blanditiis perferendis.",
    "jobTitle": "International Tactics Manager",
    "profile": {
      "username": "Wilfred_Bartoletti20",
      "firstName": "Sienna",
      "lastName": "Weber",
      "email": "Shaylee.Stark82@gmail.com"
    },
    "id": "74"
  },
  {
    "createdAt": "2023-02-13T05:02:52.523Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/386.jpg",
    "Bio": "Sit fugit exercitationem aperiam autem aut.",
    "jobTitle": "Legacy Brand Facilitator",
    "profile": {
      "username": "Franco.Jerde",
      "firstName": "Gust",
      "lastName": "Erdman",
      "email": "Kira_Rippin@yahoo.com"
    },
    "id": "75"
  },
  {
    "createdAt": "2023-02-12T15:03:51.211Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/134.jpg",
    "Bio": "Quisquam quam facilis iste facilis ullam.",
    "jobTitle": "Dynamic Tactics Planner",
    "profile": {
      "username": "Marshall17",
      "firstName": "Skye",
      "lastName": "Schuppe",
      "email": "Khalid24@hotmail.com"
    },
    "id": "76"
  },
  {
    "createdAt": "2023-02-13T00:17:28.898Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/352.jpg",
    "Bio": "Suscipit asperiores perferendis repellendus consequatur quasi veritatis.",
    "jobTitle": "Customer Research Executive",
    "profile": {
      "username": "Vinnie.Kertzmann3",
      "firstName": "Jayde",
      "lastName": "Crist",
      "email": "Mitchell_Parker@gmail.com"
    },
    "id": "77"
  },
  {
    "createdAt": "2023-02-13T09:18:36.325Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/801.jpg",
    "Bio": "Autem minus accusamus id ducimus porro tempora.",
    "jobTitle": "Future Response Architect",
    "profile": {
      "username": "Antonina.Reynolds56",
      "firstName": "Ernesto",
      "lastName": "Lakin",
      "email": "Dorcas.Jacobi81@gmail.com"
    },
    "id": "78"
  },
  {
    "createdAt": "2023-02-12T13:49:03.792Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg",
    "Bio": "Enim provident tempora vel harum quis et corporis eaque veritatis.",
    "jobTitle": "Direct Implementation Administrator",
    "profile": {
      "username": "Breana.Schmitt10",
      "firstName": "Clint",
      "lastName": "Rippin",
      "email": "Lela33@yahoo.com"
    },
    "id": "79"
  },
  {
    "createdAt": "2023-02-12T13:09:27.751Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/238.jpg",
    "Bio": "Dicta eius dolorem.",
    "jobTitle": "Corporate Intranet Supervisor",
    "profile": {
      "username": "Markus7",
      "firstName": "Alvina",
      "lastName": "Emmerich",
      "email": "Wilson91@yahoo.com"
    },
    "id": "80"
  },
  {
    "createdAt": "2023-02-12T14:16:39.230Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/345.jpg",
    "Bio": "Voluptatum tenetur dolorum at.",
    "jobTitle": "Dynamic Creative Analyst",
    "profile": {
      "username": "Kennith.Gleichner55",
      "firstName": "Catharine",
      "lastName": "MacGyver",
      "email": "Anissa63@yahoo.com"
    },
    "id": "81"
  },
  {
    "createdAt": "2023-02-12T15:39:37.575Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg",
    "Bio": "Debitis pariatur reiciendis debitis natus accusantium accusantium cum aliquid.",
    "jobTitle": "Customer Integration Planner",
    "profile": {
      "username": "Dejon.Doyle",
      "firstName": "Lila",
      "lastName": "Hirthe",
      "email": "Sylvia_Hilpert@yahoo.com"
    },
    "id": "82"
  },
  {
    "createdAt": "2023-02-12T17:16:28.264Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg",
    "Bio": "Harum repellat quos optio voluptatibus incidunt.",
    "jobTitle": "Senior Quality Producer",
    "profile": {
      "username": "Immanuel50",
      "firstName": "Johnnie",
      "lastName": "Towne",
      "email": "Maryjane23@yahoo.com"
    },
    "id": "83"
  },
  {
    "createdAt": "2023-02-13T00:25:21.126Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg",
    "Bio": "Dolores numquam possimus facilis quidem suscipit laudantium pariatur tenetur.",
    "jobTitle": "National Quality Consultant",
    "profile": {
      "username": "Berta91",
      "firstName": "Broderick",
      "lastName": "Kemmer",
      "email": "Sydnie73@hotmail.com"
    },
    "id": "84"
  },
  {
    "createdAt": "2023-02-12T14:44:36.482Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/402.jpg",
    "Bio": "Mollitia tenetur impedit assumenda.",
    "jobTitle": "Customer Data Manager",
    "profile": {
      "username": "Oral84",
      "firstName": "Lillian",
      "lastName": "Homenick",
      "email": "Chauncey23@gmail.com"
    },
    "id": "85"
  },
  {
    "createdAt": "2023-02-13T00:27:46.274Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/944.jpg",
    "Bio": "Dolorum aliquam porro dolorem necessitatibus quas odio.",
    "jobTitle": "Regional Interactions Coordinator",
    "profile": {
      "username": "Myrtis45",
      "firstName": "Rickey",
      "lastName": "Schulist",
      "email": "Lazaro19@gmail.com"
    },
    "id": "86"
  },
  {
    "createdAt": "2023-02-12T16:46:16.186Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/645.jpg",
    "Bio": "Laboriosam optio tempore beatae occaecati atque et odit.",
    "jobTitle": "Direct Response Analyst",
    "profile": {
      "username": "Mae_Schoen",
      "firstName": "Fanny",
      "lastName": "Gibson",
      "email": "Delta_Wyman@yahoo.com"
    },
    "id": "87"
  },
  {
    "createdAt": "2023-02-13T09:55:15.297Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/184.jpg",
    "Bio": "Fuga facere perferendis vitae voluptatum delectus deserunt ea totam.",
    "jobTitle": "International Security Assistant",
    "profile": {
      "username": "Spencer_Fay",
      "firstName": "Myrna",
      "lastName": "Moore",
      "email": "Arch_Ryan42@gmail.com"
    },
    "id": "88"
  },
  {
    "createdAt": "2023-02-12T21:46:53.779Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
    "Bio": "Quas esse quae aliquid.",
    "jobTitle": "Direct Response Technician",
    "profile": {
      "username": "Isabell33",
      "firstName": "Floy",
      "lastName": "Stiedemann",
      "email": "Amara_Boyer25@gmail.com"
    },
    "id": "89"
  },
  {
    "createdAt": "2023-02-13T06:42:05.630Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
    "Bio": "Adipisci corrupti laborum explicabo.",
    "jobTitle": "Principal Response Engineer",
    "profile": {
      "username": "Michale_Upton",
      "firstName": "Meghan",
      "lastName": "Nitzsche",
      "email": "Alexis_Mayert@yahoo.com"
    },
    "id": "90"
  },
  {
    "createdAt": "2023-02-13T04:14:43.535Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/210.jpg",
    "Bio": "Occaecati magni enim nihil eligendi.",
    "jobTitle": "Future Research Designer",
    "profile": {
      "username": "Lincoln.Toy32",
      "firstName": "Kaleb",
      "lastName": "Conn",
      "email": "Lolita.Wiegand2@yahoo.com"
    },
    "id": "91"
  },
  {
    "createdAt": "2023-02-13T09:29:46.913Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    "Bio": "Fuga ad explicabo corporis impedit.",
    "jobTitle": "District Implementation Producer",
    "profile": {
      "username": "Lavada_Feil",
      "firstName": "Macie",
      "lastName": "Lebsack",
      "email": "Tremaine_Bogan@hotmail.com"
    },
    "id": "92"
  },
  {
    "createdAt": "2023-02-13T01:36:01.712Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg",
    "Bio": "Repudiandae porro rerum animi.",
    "jobTitle": "Internal Marketing Coordinator",
    "profile": {
      "username": "Clifford_Marks55",
      "firstName": "Malachi",
      "lastName": "Hilpert",
      "email": "Layne.Thiel19@hotmail.com"
    },
    "id": "93"
  },
  {
    "createdAt": "2024-04-06T12:19:13.713Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/81.jpg",
    "Bio": "In voluptate quo id.",
    "jobTitle": "Investor Assurance Architect",
    "profile": {
      "username": "Lewis15",
      "firstName": "Juanita",
      "lastName": "Runte",
      "email": "Haven_Powlowski43@yahoo.com"
    },
    "id": "94",
    "username": "sid",
    "email": "sid123@gmail.com"
  },
  {
    "createdAt": "2024-04-06T16:30:12.613Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/904.jpg",
    "Bio": "Iste dolorem corporis in dolore officia sapiente.",
    "jobTitle": "Dynamic Brand Manager",
    "profile": {
      "username": "Gilberto.Rice58",
      "firstName": "Candice",
      "lastName": "Kulas",
      "email": "Monique_Bode69@yahoo.com"
    },
    "id": "95",
    "username": "ininin",
    "email": "uiiiib@gail.vom"
  },
  {
    "createdAt": "2024-04-06T00:05:41.280Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg",
    "Bio": "Iure ullam maxime.",
    "jobTitle": "Principal Markets Facilitator",
    "profile": {
      "username": "Kaci_Greenholt",
      "firstName": "Esther",
      "lastName": "Jast",
      "email": "Rickey72@yahoo.com"
    },
    "id": "96",
    "username": "iiiii",
    "email": "iii123@gmail.com"
  },
  {
    "createdAt": "2024-04-06T08:04:51.053Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg",
    "Bio": "Est dolore unde atque dolorum libero fugiat.",
    "jobTitle": "International Optimization Director",
    "profile": {
      "username": "Clyde_Osinski",
      "firstName": "Mireille",
      "lastName": "Jaskolski",
      "email": "Vickie45@hotmail.com"
    },
    "id": "97",
    "username": "juv",
    "email": "jv@gmil.vom"
  },
  {
    "createdAt": "2024-04-06T14:37:26.950Z",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/751.jpg",
    "Bio": "Fugiat cupiditate dolore earum quaerat iure inventore.",
    "jobTitle": "jarvin",
    "profile": {
      "username": "Easton_Marquardt80",
      "firstName": "Laverne",
      "lastName": "Kling",
      "email": "Ara47@yahoo.com"
    },
    "id": "98"
  }
  
]

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: 16,
  right: 16,
});

const ColorfulAvatar = styled(Avatar)(({ theme, index }) => ({
  backgroundColor: `hsl(${index * 137.508}deg, 50%, 50%)`,
}));

const ScrollableCard = styled(Card)(({ theme }) => ({
  height: 'calc(100vh - 100px)', // Adjust this value as needed
  overflow: 'auto',
  position: 'sticky',
  top: 16,
}));

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [page, setPage] = useState(1);
  const usersPerPage = 25;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#bb86fc' : '#6200ee',
      },
      secondary: {
        main: darkMode ? '#03dac6' : '#03dac5',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease-in-out, background-color 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              backgroundColor: darkMode ? '#2c2c2c' : '#f0f0f0',
            },
          },
        },
      },
    },
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleRefresh = () => {
    setSelectedUser(null);
    setPage(1);
  };

  const handleScrollTop = () => {
    const userList = document.getElementById('user-list');
    if (userList) {
      userList.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedUsers = users.slice((page - 1) * usersPerPage, page * usersPerPage);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            User Management
          </Typography>
          <Box>
            <Tooltip title="Refresh" arrow>
              <IconButton onClick={handleRefresh} color="primary">
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"} arrow>
              <Switch
                checked={darkMode}
                onChange={handleDarkModeToggle}
                icon={<LightModeIcon />}
                checkedIcon={<DarkModeIcon />}
              />
            </Tooltip>
          </Box>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ScrollableCard id="user-list">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Users List
                </Typography>
                <List>
                  {paginatedUsers.map((user, index) => (
                    <Zoom in={true} key={user.id} style={{ transitionDelay: `${index * 50}ms` }}>
                      <div>
                        <ListItem button onClick={() => setSelectedUser(user)}>
                          <ListItemAvatar>
                            <ColorfulAvatar index={index} src={user.avatar} alt={user.profile.username} />
                          </ListItemAvatar>
                          <ListItemText 
                            primary={`${user.profile.firstName} ${user.profile.lastName}`}
                            secondary={user.profile.username}
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </div>
                    </Zoom>
                  ))}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Pagination 
                    count={Math.ceil(users.length / usersPerPage)} 
                    page={page} 
                    onChange={handleChangePage} 
                    color="primary"
                  />
                </Box>
              </CardContent>
            </ScrollableCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  User Details
                </Typography>
                {selectedUser ? (
                  <Box>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar 
                        src={selectedUser.avatar} 
                        alt={selectedUser.profile.username}
                        sx={{ width: 100, height: 100 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {`${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {selectedUser.jobTitle}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                    {selectedUser.Bio}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {selectedUser.profile.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Username: {selectedUser.profile.username}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Created: {new Date(selectedUser.createdAt).toLocaleString()}
                  </Typography>
                </Box>

                ) : (
                  <Typography variant="body1" color="textSecondary">
                    Select a user to view details
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {showScrollTop && (
        <StyledFab color="secondary" size="small" onClick={handleScrollTop}>
          <KeyboardArrowUpIcon />
        </StyledFab>
      )}
    </ThemeProvider>
  );
}

export default App;