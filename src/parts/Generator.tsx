import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface UserData {
  forename?: string;
  surname?: string;
  reason?: string;
  type?: string;
  person?: string;
}

export default function Generator() {
  const [userData, setUserData] = useState<UserData>({});
  const [result, setResult] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generate = () => {
    // Definice omluv podle délky
    const shortExcuses = [
      "Pane učiteli, omlouvám se, ale dnes jsem byl nemocný.",
      "Omlouvám se, pane učiteli, mám silnou migrénu.",
      "Pane učiteli, dnes jsem se necítil dobře.",
    ];

    const midExcuses = [
      "Vážený pane učiteli, omlouvám se, že jsem dnes nemohl přijít do školy – cítil jsem se opravdu špatně a musel jsem navštívit lékaře.",
      "Omlouvám se, pane učiteli, dnes jsem zůstal doma kvůli zdravotním potížím.",
    ];

    const longExcuses = [
      "Vážený pane učiteli, omlouvám se, že jsem se dnes nemohl zúčastnit vyučování. Ráno jsem se probudil se silnými příznaky nemoci, navštívil jsem lékaře a byl jsem nucen zůstat doma na odpočinek. Věřím, že pochopíte mou situaci.",
      "Vážený pane učiteli, omlouvám se za svou nepřítomnost. Dnes ráno jsem se necítil dobře, musel jsem vyhledat lékařskou pomoc a odpočívat, abych se co nejrychleji uzdravil.",
    ];

    let excuse = "";
    const type = userData.type || "short";

    if (type === "short") {
      excuse = shortExcuses[Math.floor(Math.random() * shortExcuses.length)];
    } else if (type === "mid") {
      excuse = midExcuses[Math.floor(Math.random() * midExcuses.length)];
    } else if (type === "long") {
      excuse = longExcuses[Math.floor(Math.random() * longExcuses.length)];
    }

    // Pokud byl vyplněn dodatečný důvod, připojí se k omluvě.
    if (userData.reason) {
      excuse += ` Důvod: ${userData.reason}.`;
    }

    setResult(excuse);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Nepodařilo se zkopírovat text: ", err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <h1 className="mb-6 text-4xl text-center font-bold text-gray-800">
          Generátor omluv pro učitele
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Jméno */}
          <div className="flex flex-col">
            <label className="mb-1 text-lg font-medium text-gray-700">
              Jméno
            </label>
            <input
              name="forename"
              onChange={handleChange}
              value={userData.forename || ""}
              placeholder="Zadejte křestní jméno"
              className="border border-gray-300 bg-white text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Příjmení */}
          <div className="flex flex-col">
            <label className="mb-1 text-lg font-medium text-gray-700">
              Příjmení
            </label>
            <input
              name="surname"
              onChange={handleChange}
              value={userData.surname || ""}
              placeholder="Zadejte příjmení"
              className="border border-gray-300 bg-white text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Důvod */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-lg font-medium text-gray-700">
              Důvod (volitelně)
            </label>
            <input
              name="reason"
              onChange={handleChange}
              value={userData.reason || ""}
              placeholder="Zadejte důvod, pokud máte konkrétní situaci"
              className="border border-gray-300 bg-white text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Výběr typu omluvy */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-lg font-medium text-gray-700">
              Typ omluvy
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center text-gray-700">
                <input
                  name="type"
                  type="radio"
                  value="short"
                  checked={userData.type === "short"}
                  onChange={handleChange}
                  className="mr-2 accent-indigo-500"
                />
                Krátký
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  name="type"
                  type="radio"
                  value="mid"
                  checked={userData.type === "mid"}
                  onChange={handleChange}
                  className="mr-2 accent-indigo-500"
                />
                Střední
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  name="type"
                  type="radio"
                  value="long"
                  checked={userData.type === "long"}
                  onChange={handleChange}
                  className="mr-2 accent-indigo-500"
                />
                Dlouhý
              </label>
            </div>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-lg font-medium text-gray-700">
              Kdo píše?
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center text-gray-700">
                <input
                  name="person"
                  type="radio"
                  value="me"
                  checked={userData.person === "me"}
                  onChange={handleChange}
                  className="mr-2 accent-indigo-500"
                />
                Já
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  name="person"
                  type="radio"
                  value="parent"
                  checked={userData.person === "parent"}
                  onChange={handleChange}
                  className="mr-2 accent-indigo-500"
                />
                Rodič
              </label>
            </div>
          </div>
        </div>

        {/* Tlačítka a výsledek */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            onClick={generate}
            className="w-full md:w-auto bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition-all duration-300"
          >
            Vygenerovat omluvu
          </button>

          <div className="w-full md:w-auto flex flex-col items-center">
            <AnimatePresence>
              {result && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border border-gray-300 bg-gray-50 text-gray-800 px-4 py-2 rounded-md mb-2"
                >
                  {result}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              onClick={() => copyToClipboard(result)}
              disabled={!result}
              className={`w-full md:w-auto bg-green-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition-all duration-300 ${
                !result && "opacity-50 cursor-not-allowed"
              }`}
            >
              Zkopírovat
            </button>

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-2 text-green-600"
                >
                  Zkopírováno!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
