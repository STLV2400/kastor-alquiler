import{e as l,s as u,m as n,L as d}from"./index-DgQ3i3LV.js";const i=e=>e.tipoDoc==="RUC"?e.representante||e.nombre:e.nombre.split(" ")[0],t=(e,a)=>e.items.map(o=>a.find(r=>r.id===o.equipoId)).filter(Boolean).map(o=>`• ${o.nombre} (${o.codigo})`).join(`
`);function m(e,a,o,r){return`Hola ${i(a)} 👋, gracias por alquilar con *KASTOR* 🦫

📄 Contrato *${e.numero}*
${t(e,o)}

📅 Desde: ${u(e.fechaSalida)}
⏰ Devolver: *${u(e.fechaPactada)}*
💰 Alquiler: ${n(d(e))} (pagado)
🔒 Depósito: ${n(e.deposito)} (se devuelve al entregar el equipo completo y en buen estado)

Si necesitas más días, avísanos *antes* del vencimiento.
Cualquier falla, escríbenos de inmediato al ${r.empresa.telefono1}. ¡Éxitos en tu obra! 💪`}function p(e,a,o,r){const s=l(e,r);return s.atraso>0?`Hola ${i(a)}, te escribimos de *KASTOR* 🦫

Tu alquiler *${e.numero}* venció el ${u(e.fechaPactada)} y tiene *${s.atraso} día(s) de atraso*.
${t(e,o)}

Según el contrato, la penalidad es de ${n(s.moraDiaria)} por día (acumulado: *${n(s.mora)}*), que se descuenta del depósito.

Por favor confírmanos hoy a qué hora devuelves el equipo o si deseas ampliar el plazo. Gracias.`:s.restantes===0?`Hola ${i(a)} 👋, te recordamos que *hoy* vence tu alquiler *${e.numero}* de KASTOR:
${t(e,o)}

¿Lo devuelves hoy o prefieres ampliar unos días? Respóndenos por aquí 🙌`:`Hola ${i(a)} 👋, te recordamos que tu alquiler *${e.numero}* de KASTOR vence el *${u(e.fechaPactada)}*:
${t(e,o)}

Si necesitas más días, avísanos antes para reservarlos 🙌`}function $(e,a,o,r){return`Hola ${i(a)}, recibimos el equipo del contrato *${e.numero}* ✅
${o>0?`Te devolvemos ${n(o)} de tu depósito.`:""}${r>0?`Queda un saldo por pagar de ${n(r)}.`:""}
¡Gracias por confiar en KASTOR! 🦫 Te esperamos en tu próxima obra.`}function f(e,a){return`Hola ${a.contactoRef.nombre}, le escribimos de *KASTOR* (alquiler de equipos). ${a.nombre} lo/la indicó como contacto de referencia. No logramos comunicarnos con él/ella por el contrato ${e.numero}. ¿Podría pedirle que se comunique con nosotros? Gracias.`}export{f as a,m as b,$ as c,p as m};
