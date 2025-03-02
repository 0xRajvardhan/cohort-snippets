//what is the difference between types and interfaces
type Employee_ = {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
}

type techLead = Employee_ & Manager;

const t: techLead = {
  name: "rajvardhan",
  startDate: new Date(),
  department: "blockchain",
};
