export interface Ticket {
  ref: string;
  name: string;
  type: string;
}

export interface RawTableItem {
  Affiliate: string;
  Email: string;
  Firstname: string;
  "Is physical ticket": string;
  Lastname: string;
  "Order created at": string;
  "Order number": string;
  "Paid at": string;
  Phone: string;
  Price: string;
  "Price label or sponsor name": string;
  "Reference code": string;
  Status: string;
  Ticket: string;
  "Ticket type": string;
  "Used at": string;
}
