import React from 'react';

const CLIENTS = [
  { id: 'becil', name: 'BECIL', logo: 'becil.png' },
  { id: 'cbitc', name: 'CBITC', logo: 'cbitc.png' },
  { id: 'cci', name: 'CCI', logo: 'cci.png' },
  { id: 'dtpi', name: 'DTPI', logo: 'dtpi.png' },
  { id: 'gem', name: 'GEM', logo: 'gem.png' },
  { id: 'gmda', name: 'GMDA', logo: 'gmda.png' },
  { id: 'iasri', name: 'IASRI', logo: 'iasri.png' },
  { id: 'iims', name: 'IIMS', logo: 'iims.png' },
  { id: 'iitd', name: 'IIT Delhi', logo: 'iitd.png' },
  { id: 'iiti', name: 'IIT Indore', logo: 'iiti.png' },
  { id: 'iitr', name: 'IIT Roorkee', logo: 'iitr.png' },
  { id: 'imd', name: 'IMD', logo: 'imd.png' },
  { id: 'maitb', name: 'MAITB', logo: 'maitb.png' },
];

export const ClientsPage: React.FC = () => (
  <div className="space-y-28 pb-28">
    <section className="bg-gradient-to-b from-[#EAF4FF]/60 via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-full border border-blue-200">
          Arsenal Infosolutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#1E293B]">Clients</h1>
        <p className="text-base sm:text-lg font-body text-[#475569] max-w-3xl mx-auto leading-relaxed">
          Enterprise clients and government organizations trusting Arsenal Infosolutions for digital transformation and managed services.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {CLIENTS.map((client) => (
          <div
            key={client.id}
            className="rounded-3xl border border-[#E2E8F0] bg-white p-6 flex flex-col items-center justify-center text-center shadow-sm transition-all hover:border-[#0A66C2] hover:shadow-md"
          >
            <div className="h-24 w-full flex items-center justify-center mb-4">
              <img
                src={`/images/${client.logo}`}
                alt={client.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-[#1E293B] break-words">
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
