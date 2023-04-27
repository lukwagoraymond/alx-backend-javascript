interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Roy',
  lastName: 'Ssentongo',
  age: 28,
  location: 'Mbale'
};

const studentTwo: Student = {
  firstName: 'Raymond',
  lastName: 'Lukwago',
  age: 30,
  location: 'Kampala'
};

const studentsList: Student[] = [studentOne, studentTwo];

// Creates a <table> element and <tbody> element
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// Creates and adds data to first row headers.
const row_col: HTMLTableRowElement = document.createElement('tr');
const colHeading_1: HTMLTableCellElement = document.createElement('th');
const colHeading_2: HTMLTableCellElement = document.createElement('th');
colHeading_1.innerHTML = 'firstName';
colHeading_2.innerHTML = 'location';

// Put <th> into <thead>
row_col.appendChild(colHeading_1);
row_col.appendChild(colHeading_2);
thead.appendChild(row_col);
// Put <thead> into <table>
table.appendChild(thead);

for (const element of studentsList) {
  const row: HTMLTableRowElement = document.createElement('tr');

  const row_data_1: HTMLTableCellElement = document.createElement('td');
  row_data_1.innerHTML = element.firstName;

  const row_data_2: HTMLTableCellElement = document.createElement('td');
  row_data_2.innerHTML = element.location;

  row.appendChild(row_data_1);
  row.appendChild(row_data_2);

  // add the row to the end of the tabl body
  tbody.appendChild(row);
}

// Put the <tbody> in the <table>
table.appendChild(tbody);

//append the <table> into <body>
body.appendChild(table);
