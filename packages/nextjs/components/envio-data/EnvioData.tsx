import React, { useState } from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "../../generated/gql";
import { Address } from "../scaffold-eth";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { formatEther, parseEther } from "viem";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { LoaderIcon } from "react-hot-toast";

type Greeting = {
  id: string;
  greeting: string;
  premium: boolean;
  value: string;
};

type User = {
  id: string;
  address: string;
  premium: boolean;
  greetingsCount: number;
  greetings: Greeting[];
};

type SetSelectedUserFn = (user: User) => void;

const UserRow = ({ user, setSelectedUser }: { user: User; setSelectedUser: SetSelectedUserFn }) => {
  const { address, premium, greetingsCount } = user;
  return (
    <tr className="hover text-sm">
      <td className="w-1/12 md:py-4">
        <Address address={address} />
      </td>
      <td className="w-2/12 md:py-4">{premium ? `👑` : ""}</td>
      <td className="w-1/12 md:py-4">{greetingsCount}</td>
      <td className="w-1/12 md:py-4">
        <button onClick={() => setSelectedUser(user)} className="btn btn-primary btn-sm flex hover:text-secondary">
          <span>Greetings</span> <ChevronRightIcon width={15} />
        </button>
      </td>
    </tr>
  );
};

const UsersTable = ({ users, setSelectedUser }: { users: User[]; setSelectedUser: (user: User) => void }) => {
  return (
    <div className="flex justify-center px-4 md:px-0">
      <div className="overflow-x-auto w-full shadow-2xl rounded-xl">
        <table className="table text-xl bg-base-100 table-zebra w-full md:table-md table-sm">
          <thead>
            <tr className="bg-primary text-white rounded-xl text-sm text-base-content">
              <th>User</th>
              <th>Premium</th>
              <th>No. Greetings </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow key={user.id} user={user} setSelectedUser={setSelectedUser} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GreetingRow = ({ greeting }: { greeting: Greeting }) => {
  const { greeting: greetingMessage, premium, value } = greeting;
  const valueEth = formatEther(parseEther(value));

  return (
    <tr className="hover text-sm">
      <td className="w-1/12 md:py-4">{greetingMessage}</td>
      <td className="w-1/12 md:py-4">{valueEth}</td>
      <td className="w-2/12 md:py-4">{premium ? `👑` : ""}</td>
    </tr>
  );
};

const SelectedUserTable = ({ user, goBack }: { user: User; goBack: () => void }) => {
  const { address, premium } = user;
  return (
    <div className="flex justify-center px-4 md:px-0">
      <div className="overflow-x-auto w-full shadow-2xl rounded-xl">
        <div className="bg-primary text-white rounded-top-xl text-sm text-base-content flex gap-2 items-center">
          <button
            onClick={() => goBack()}
            className="btn btn-primary hover:text-secondary flex items-center cursor-pointer "
          >
            <ChevronLeftIcon width={20} /> <span>BACK</span>
          </button>

          <Address address={address} />
          <div className="p-3">{premium ? `👑` : ""}</div>
        </div>
        <table className="table text-xl bg-base-100 table-zebra w-full md:table-md table-sm">
          <thead>
            <tr className="bg-neutral text-primary rounded-xl text-sm text-base-content text-left">
              <th>Greeting</th>
              <th>Value</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {user.greetings.map(greeting => (
              <GreetingRow key={greeting.id} greeting={greeting} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const GET_USERS = gql(`
  query GetUsers {
    User {
      id
      address
      greetingsCount
      premium
      greetings {
        id
        premium
        greeting
        value
      }
    }
  }
`);

const EnvioData: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { data } = useQuery(GET_USERS, {
    pollInterval: 500,
  });

  return (
    <div className="w-full max-w-2xl">
      {selectedUser ? (
        <SelectedUserTable user={selectedUser} goBack={() => setSelectedUser(null)} />
      ) : data ? (
        <UsersTable users={data.User} setSelectedUser={setSelectedUser} />
      ) : (
        <div className="flex items-center gap-2 w-full justify-center p-10">
          Loading Envio Data...
          <LoaderIcon />
        </div>
      )}
    </div>
  );
};

export default EnvioData;
