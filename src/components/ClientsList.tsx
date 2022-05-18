import React, { useEffect, useState } from "react";
import { Clients } from "types/Clients";
import clientsData from "../assets/clients.json";

const ClientsList = () => {
  const [clients, setClients] = useState<Clients | null>(null);
  useEffect(() => {
    if (!clients) {
      setClients(clientsData.clients as Clients);
    }
  });
  return (
    <div className="p-6 bg-[#F0F4F4]">
      <h3 className="text-3xl text-center my-8">Clients</h3>
      <p className="text-center px-4 text-lg">
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clients?.map((client, index) => {
          return (
            <div
              className="flex items-center justify-center p-6 my-4"
              key={`client-${index}`}
            >
              <img src={`/images/clients/${client.clientLogoURL}`} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsList;
