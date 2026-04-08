# Framework Design - Step by Step

## 1. Creating Local working directory with in the Local Workspace

Local Working Directory : playwright-tdd-framework
 cmd : cd playwright-tdd-framework

 ## 2. Install necessary dependencies based on our project requirements.

    1. playwright : npm init playwright@latest  => web/api automation
    2. typescript : npm install typescript => programming language
    3. ts-node : npm install ts-node => to run tyscript programs with node js
    4. types/node : npm install @types/node => file handling and command line execution
    5. postgres DB : npm install pg @types/pg
    6. excel : npm install excel xlsx
    7. pdf file : npm install pdf-parse

## 3. Setup global configurations

    1. add ts config => npx tsc --init
    2. add project configurations :    package.json
     "type":"module"

    3. add typescript configurations : tsconfig.json (in compiler section)
    "noEmit": true,
    "allowImportingTsExtensions": true,

# 4.Adding folder structure to maintain different components of the framework.

playwright-tdd-framework
│
├── config
│   └── config.json
│       ➜ Stores configuration details for UI, API, and Database
│       Example: App URL, Base URL, DB connection details, etc.
│
├── testdata
│   ➜ Stores test data for UI, API, and DB test cases
│
├── screenshots
│   ➜ Stores screenshots captured during failed test executions ��
│
├── files
│   ➜ Stores flat files such as Excel, PDF, images, or any files required
during execution
│
├── utils
│   ➜ Helper utilities for framework operations
│   Example: Excel reader, PDF reader, file operations, etc.
│
├── commons
│   ➜ Common reusable methods for
│      • UI automation
│      • API automation
│      • Database automation
│
├── page-objects
│   ➜ Maintains page elements and reusable page methods
│   Implements the **Page Object Model (POM) Design Pattern**
│
└── tests
    ➜ Contains all test scripts and spec files