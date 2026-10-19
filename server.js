// Servidor Express - Projeto #02: Clínica Veterinária & PetShop
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/api/veterinaria/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 2,
        sistema: "Clínica Veterinária & PetShop",
        categoria: "Saúde Animal",
        tabela_conectada: process.env.TABELA_ALVO || "prontuarios_pets",
        parametro_ambiente: process.env.REGISTRO_CRMV_CLINICA || "CRMV_SP_99202",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #02] Clínica Veterinária & PetShop rodando em http://localhost:${PORT}/api/veterinaria/status`);
});