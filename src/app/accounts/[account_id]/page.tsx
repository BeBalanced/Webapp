import TransactionsTable from "@/components/transactions/transactionsTable";
export default function AccountDetails() {
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 shadow-md rounded-md border-2 border-black">
        <h2 className="font-bold">Transactions</h2>
        <TransactionsTable />
      </div>
    </>
  );
}
