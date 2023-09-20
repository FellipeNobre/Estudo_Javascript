class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    }

    éSequencia() {
        const sequencia = this.cpfLimpo.charAt(0).repeat(11);
        return this.cpfLimpo === sequencia;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const d1 = this.geraDigito(cpfParcial);
        const d2 = this.geraDigito(cpfParcial + d1);
        this.novoCPF = cpfParcial + d1 + d2;
    }

    geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : String(0);
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}
