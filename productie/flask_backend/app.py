from flask import Flask, jsonify
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Autorise les requêtes cross-origin

# Connexion à PostgreSQL sur AWS RDS
DB_HOST = "database-1.cfa4s4ys0wra.eu-central-1.rds.amazonaws.com"
DB_NAME = "personen"
DB_USER = "postgres"
DB_PASS = "UdF9GnWNw"
DB_PORT = "5432"

def get_db_connection():
    return psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASS,
        port=DB_PORT
    )

@app.route('/personnes', methods=['GET'])
def get_personnes():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM personnes;')
    personnes = cur.fetchall()
    cur.close()
    conn.close()

    # Formater les résultats en JSON
    personnes_list = [{"id": p[0], "nom": p[1], "age": p[2]} for p in personnes]
    return jsonify(personnes_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
