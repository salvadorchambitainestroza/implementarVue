var app = new Vue({
    el: '#app',
    data: {
        // titulo : 'hola mundo'
        nombre: '',
        promedio: '',
        lista:[],
    },
    methods:{
        agregarNota: function () {
            if (this.name!="" && this.promedio!="") {
                this.lista.push({nombre: this.nombre, promedio: this.promedio, estado: this.estado()})
                this.nombre = '';
                this.promedio = '';
            } else {
                alert('Nombre y promedio son obligatorios');
            }
        },
        estado: function() {
            if (this.promedio >= 7) {
                return 'Aprobado';
            } else {
                return 'Reprobado';
            }
        },
    }
})

