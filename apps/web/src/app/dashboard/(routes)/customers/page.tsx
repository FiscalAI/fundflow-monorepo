"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { searchLocalStorage } from "@/scripts/check-user-auth";
import { toast } from "@/components/ui/use-toast";

const data: User[] = [
  {
    id: "1",
    name: "John Doe",
    phoneNo: "123-456-7890",
    userName: "john_doe",
    email: "john@example.com",
    productsPurchased: "Basic",
    paymentType: "yearly",
  },
  {
    id: "2",
    name: "Jane Doe",
    phoneNo: "987-654-3210",
    userName: "jane_doe",
    email: "jane@example.com",
    productsPurchased: "Premium",
    paymentType: "monthly",
  },
  {
    id: "3",
    name: "John Smith",
    phoneNo: "123-456-7890",
    userName: "john_smith",
    email: "john_smith@example.com",
    productsPurchased: "Basic",
    paymentType: "yearly",
  },
  {
    id: "4",
    name: "Jane Smith",
    phoneNo: "987-654-3210",
    userName: "jane_smith",
    email: "jane_smith@example.com",
    productsPurchased: "Premium",
    paymentType: "monthly",
  },
  {
    id: "5",
    name: "John Doe",
    phoneNo: "123-456-7890",
    userName: "john_doe",
    email: "john_doe@example.com",
    productsPurchased: "Basic",
    paymentType: "yearly",
  },
];

export type User = {
  id: string;
  name: string;
  phoneNo: string;
  userName: string;
  email: string;
  productsPurchased: string;
  paymentType: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "userName",
    header: "Username",
    cell: ({ row }) => <div>{row.getValue("userName")}</div>,
  },
  {
    accessorKey: "phoneNo",
    header: "Phone Number",
    cell: ({ row }) => <div>{row.getValue("phoneNo")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "productsPurchased",
    header: "Products Purchased",
    cell: ({ row }) => <div>{row.getValue("productsPurchased")}</div>,
  },
  {
    accessorKey: "paymentType",
    header: "Payment Type",
    cell: ({ row }) => <div>{row.getValue("paymentType")}</div>,
  },

  {
    id: "viewDetails",
    header: "view details",
    cell: ({ row }) => (
      <Button variant="default" onClick={() => handleUpdate(row)}>
        View Detials
      </Button>
    ),
  },
];

type Checked = DropdownMenuCheckboxItemProps["checked"];

const CustomerDashboardPage = () => {
  // const [data, setData] = React.useState<User[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <h1 className=" text-3xl flex justify-center items-center">
        User Details
      </h1>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm text-black"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-black">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </div>
  );
};

function handleUpdate(row: Row<User>): void {
  console.log(row.getValue("id"));
  // window.location.href = `users/${row.getValue("id")}`;
}

export default CustomerDashboardPage;
