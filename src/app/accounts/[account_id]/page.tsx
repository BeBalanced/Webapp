"use client";
interface Props {
  params: {
    account_id: string;
  };
}
export default function AccountDetails({ params }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 shadow-md rounded-md border-2 border-black">
        <h2 className="font-bold">Transactions</h2>
        <p>{params.account_id}</p>
      </div>
    </>
  );
}
