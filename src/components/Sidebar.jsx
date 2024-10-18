import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RiBookOpenLine,
  RiMenuSearchLine,
  RiArrowDropRightLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [submenuStates, setSubmenuStates] = useState({});

  const toggleSubmenu = (id) => {
    setSubmenuStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const menuItems = [
    {
      id: 'calidadEducativa',
      title: 'Calidad Educativa',
      icon: <RiBookOpenLine className="text-amber-500" />,
      submenu: [
        {
          id: 'secuenciaDidactica',
          title: 'Secuencia Didáctica',
          submenu: [
            { title: "Gestionar", path: "/gestionar" },
            { title: "Visualizar", path: "/visualizar" }
          ]
        },
      ],
    },
    {
      id: 'investigacion',
      title: 'Investigación',
      icon: <RiMenuSearchLine className="text-amber-500" />,
      submenu: [
        {
          id: 'proyectos',
          title: 'Proyectos',
          submenu: [
            { title: "Líder de grupo", path: "/lider-de-grupo" },
            { title: "Academias", path: "/academias" },
            { title: "Evaluadores", path: "/evaluadores" }
          ]
        },
      ],
    },
  ];

  const createMenuItem = ({ id, title, icon, submenu }) => {
    return (
      <li key={id}>
        <button
          onClick={() => toggleSubmenu(id)}
          className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-black transition-colors w-full max-w-[250px]"
          type="button"
          style={{ minWidth: '250px' }} // Tamaño fijo para el menú principal
        >
          {icon}
          <span className="flex-1">{title}</span>
          <RiArrowDropRightLine className={`w-6 h-6 mt-1 transition-all ${submenuStates[id] ? "rotate-90" : ""} ml-auto`} />
        </button>
        <ul className={`my-2 transition-all duration-300 ${!submenuStates[id] ? "hidden" : ""}`}>
          {submenu.map((item) => (
            <li key={item.id}>
              {item.submenu ? (
                <button
                  className="flex items-center gap-4 py-2 px-4 pl-6 rounded-lg hover:text-white transition-colors w-full max-w-[250px]"
                  style={{ minWidth: '250px' }}
                  onClick={() => toggleSubmenu(item.id)}
                  type="button"
                >
                  {item.title}
                  <RiArrowDropRightLine className={`w-6 h-6 mt-1 ${submenuStates[item.id] ? "rotate-90" : ""} ml-auto`} />
                </button>
              ) : (
                <Link to={item.path} className="py-2 px-4 pl-6 border-l border-gray-400 block relative before:w-3 before:h-3 before:absolute before:bg-gray-400 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray-800 hover:transition-colors hover:text-white w-full max-w-[250px]"
                  style={{ minWidth: '250px' }}
                >
                  {item.title}
                </Link>
              )}
              {item.submenu && (
                <ul className={`ml-6 transition-all duration-300 ${!submenuStates[item.id] ? "hidden" : ""}`}>
                  {item.submenu.map((sItem) => (
                    <li key={sItem.title}>
                      <Link to={sItem.path} className="py-2 px-4 pl-6 block hover:text-white transition-colors w-full max-w-[250px]"
                        style={{ minWidth: '250px' }} // Ajuste para sub-submenús
                      >
                        {sItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <div className="sidebar fixed xl:static w-full h-full -left-full top-0 bg-gray-800 p-8 flex flex-col">
      <div className="text-center text-2xl font-bold text-white mb-10">
        Plataforma<span className="text-amber-500 text-4xl">.</span>
      </div>
      <ul className="flex flex-col space-y-2">
        {menuItems.map(createMenuItem)}
      </ul>
      <nav>
        {/* Elemento de cierre de sesión */}
      </nav>
    </div>
  );
};

export default Sidebar;
