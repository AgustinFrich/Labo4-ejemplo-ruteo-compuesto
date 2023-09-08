# Conceptos en el projecto

- Ruteo simple (en el app-routing.module)
- Lazy loading (en el app-routing.module hacia el asignaturas.module)
- Ruteo compuesto / children (en el asignaturas-routing.module)

# Comandos utilizados:

ng g c components/calendario

ng g c components/menu

ng g c components/tareas

### Genera el modulo con lazy loading sobre el modulo principal ya implementado:

ng g m asignaturas --route asignaturas --module=app

### Generan los componentes sobre el nuevo modulo:

ng g c asignaturas/laboIII --module asignaturas  

ng g c asignaturas/laboIV --module asignaturas

ng g c asignaturas/laboV --module asignaturas

# Ejemplo funcionando
https://ejemplo-ruteo-compuesto-laboiv.web.app/
