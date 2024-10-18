

export default function Component() {
    return (
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-slate-400 shadow-xl rounded-xl text-black">
        {/* Header */}
        <header className="p-4 flex flex-col md:flex-row justify-between items-center mb-6">
              <img src="./logotipo_universidad.svg" alt="University Logo" className="w-28 h-28 mb-4 md:mb-0" />
          <div className="text-center mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold text-orange-600">Universidad <span className="text-black text-xl md:text-2xl font-bold">Pablo Guardado Chávez</span></h1>
          <p className="text-base md:text-lg font-medium">Dirección de Investigación</p>
          <p className="text-base md:text-lg font-medium">Registro de Grupos de Investigación</p>
          </div>
          <div className="text-center md:text-right">
          <p className="font-bold">UPGCH-DI-FP1-001</p>
          <img src="./logo_invest.png" alt="Research Logo" className="w-15 h-15 mx-auto md:ml-auto" />
          </div>
      </header>
  
        {/* Form */}
        <form className="space-y-6">
          {/* Page 1 */}
          <section>
            <h2 className="text-xl font-bold mb-2">Información Básica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="groupName" className="block">Nombre del grupo de Investigación:</label>
                <input type="text" id="groupName" className="w-full border p-2" />
              </div>
              <div>
                <label htmlFor="date" className="block">Fecha:</label>
                <input type="date" id="date" className="w-full border p-2" />
              </div>
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Área de conocimiento del grupo de investigación:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['I. FÍSICO-MATEMÁTICAS Y CIENCIAS DE LA TIERRA',
              'II. HUMANIDADES Y CIENCIAS SOCIALES', 
              'III. BIOLOGÍA Y QUÍMICA',
              'III. MEDICINA Y CIENCIAS DE LA SALUD',
              'IV. CIENCIAS DE LA CONDUCTA Y LA EDUCACIÓN',
              'V. INGENIERÍA DESARROLLO TECNOLÓGICO'].map((area, index) => (
                <div key={index} className="flex items-center">
                  <input type="checkbox" id={`area${index}`} className="mr-2" />
                  <label htmlFor={`area${index}`}>{area}</label>
                </div>
              ))}
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Objetivo del Grupo de Investigación:</h2>
            <textarea className="w-full border p-2 h-24"></textarea>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Líneas de Generación y aplicación del conocimiento (LGAC)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Nombre de la LGAC</th>
                    <th className="border p-2">Descripción de las LGAC</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <tr key={num}>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Líder del Grupo de investigación</h2>
            <div>
              <label htmlFor="leaderName" className="block">Grado y Nombre:</label>
              <input type="text" id="leaderName" className="w-full border p-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block">Correo electrónico:</label>
                <input type="email" id="email" className="w-full border p-2" />
              </div>
              <div>
                <label htmlFor="phone" className="block">Teléfono celular:</label>
                <input type="tel" id="phone" className="w-full border p-2" />
              </div>
            </div>
          </section>
  
          {/* Page 2 */}
          <section>
            <h2 className="text-xl font-bold mb-2">Integrantes del grupo de investigación</h2>
  
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">No.</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Perfil profesional</th>
                    <th className="border p-2">Posgrado o especialidad</th>
                    <th className="border p-2">Correo electrónico</th>
                    <th className="border p-2">LGAC que cultiva (Número)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <tr key={num}>
                      <td className="border p-2 text-center font-bold">{num}</td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="email" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Colaboradores</h2>
            <p className="mb-2">Los colaboradores son profesores externos o estudiantes.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">No</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Profesor/estudiante</th>
                    <th className="border p-2">Correo electrónico</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((num) => (
                    <tr key={num}>
                      <td className="border p-2 text-center font-bold">{num}</td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="email" className="w-full" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Metas compromiso de productividad del grupo de investigación</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Metas de productividad</th>
                    <th className="border p-2">Cantidad</th>
                    <th className="border p-2">Fecha tentativa de cumplimiento</th>
                    <th className="border p-2">Comentario</th>
                  </tr>
                </thead>
                <tbody>
                  {['Producción Académica', 'Artículos Publicados', 'Investigación', 'Proyectos de investigación', 'Formación De Recursos Humanos'].map((meta, index) => (
                    <tr key={index}>
                      <td className="border p-2">{meta}</td>
                      <td className="border p-2"><input type="number" className="w-full" /></td>
                      <td className="border p-2"><input type="date" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
  
          {/* Page 3 */}
          <section>
            <h2 className="text-xl font-bold mb-2">Dirección de tesis</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <tbody>
                  {['Dirección de tesis:', 'Investigación Educativa:', 'Proyectos de investigación educativa:', 'Otros:', 'Congresos:', 'Talleres:', 'Seminarios:'].map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">{item}</td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Requerimientos del grupo de Investigación para el desarrollo de sus actividades</h2>
            <textarea className="w-full border p-2 h-48"></textarea>
          </section>
  
          {/* Page 4 */}
          <section>
            <h2 className="text-xl font-bold mb-2">Nombre y firma del líder de grupo.</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Firma</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(1)].map((_, index) => (
                    <tr key={index}>
                      <td className="border p-2"><input type="text" className="w-full" /></td>
                      <td className="border p-2"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* Submit Button */}
          <div>
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 w-full md:w-auto">
              Enviar registro
            </button>
          </div>
        </form>
      </div>
    );
  }