"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Transaction = {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  date: string;
  payment: string;
  country: string;
};

const transactions: Transaction[] = [
  { id: "TXN001", customer: "John Doe", email: "john@example.com", amount: 250.0, status: "completed", date: "2024-12-01", payment: "Credit Card", country: "USA" },
  { id: "TXN002", customer: "Jane Smith", email: "jane@example.com", amount: 150.5, status: "completed", date: "2024-12-02", payment: "PayPal", country: "UK" },
  { id: "TXN003", customer: "Bob Wilson", email: "bob@example.com", amount: 320.0, status: "pending", date: "2024-12-03", payment: "Bank Transfer", country: "Canada" },
  { id: "TXN004", customer: "Alice Brown", email: "alice@example.com", amount: 89.99, status: "completed", date: "2024-12-03", payment: "Credit Card", country: "Australia" },
  { id: "TXN005", customer: "Charlie Davis", email: "charlie@example.com", amount: 450.0, status: "failed", date: "2024-12-04", payment: "Debit Card", country: "USA" },
  { id: "TXN006", customer: "Emma Watson", email: "emma@example.com", amount: 175.25, status: "completed", date: "2024-12-04", payment: "PayPal", country: "UK" },
  { id: "TXN007", customer: "Michael Chen", email: "michael@example.com", amount: 520.0, status: "pending", date: "2024-12-05", payment: "Credit Card", country: "Singapore" },
  { id: "TXN008", customer: "Sarah Johnson", email: "sarah@example.com", amount: 95.5, status: "completed", date: "2024-12-05", payment: "Bank Transfer", country: "USA" },
  { id: "TXN009", customer: "David Martinez", email: "david@example.com", amount: 380.0, status: "completed", date: "2024-12-05", payment: "Credit Card", country: "Spain" },
  { id: "TXN010", customer: "Lisa Anderson", email: "lisa@example.com", amount: 210.75, status: "failed", date: "2024-12-05", payment: "Debit Card", country: "Canada" },
];

export default function Table() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Latest payment activities</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="overflow-auto max-h-[200px]">
          <UITable>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{transaction.email}</TableCell>
                  <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        transaction.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : transaction.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.payment}</TableCell>
                  <TableCell>{transaction.country}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </UITable>
        </div>
      </CardContent>
    </Card>
  );
}