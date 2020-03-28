const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const records = 5;
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(records)
            .offset((page - 1) * records)
            .select('incidents.*', 'ongs.name as nameOng', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf');

        response.header('X-Total-Count', count['count(*)']);
        return response.json({incidents});
    },

    async create(request, response) {
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;
    
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
    
        return response.json({ id });
    },

    async delete(request, response) {
        const ong_id = request.headers.authorization;
        const { id } = request.params;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if(!incidents) {
            return response.status(500).json({error: "Caso não encontrado."});
        }

        if(incidents.ong_id != ong_id) {
            return response.status(401).json({error: "Operação não autorizada."});
        }

        await connection('incidents')
            .where('id', id)
            .delete();
        
        return response.status(204).send();
    }
};