from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///Notes_app.db"
db = SQLAlchemy(app)


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(500), nullable=False)

    def __repr__(self) -> str:
        return f"{self.title} - {self.content}"

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
        }


@app.route("/notes", methods=['GET'])
def get_notes():
    notes = Note.query.all()
    return jsonify([note.to_dict() for note in notes])


@app.route("/notes", methods=['POST'])
def create_note():
    data = request.get_json()
    new_note = Note(title=data["title"], content=data["content"])
    db.session.add(new_note)
    db.session.commit()
    print("Created!")
    return jsonify(new_note.to_dict())


@app.route("/notes/<int:id>", methods=['PUT'])
def update_notes(id):
    data = request.get_json()
    note = Note.query.get_or_404(id)
    note.title = data["title"]
    note.content = data["content"]
    db.session.commit()
    return jsonify(note.to_dict())


@app.route("/notes/<int:id>", methods=['DELETE'])
def delete_notes(id):
    note = Note.query.get_or_404(id)
    db.session.delete(note)
    db.session.commit()
    return '', 204


if __name__ == "__main__":
    app.run(debug=True)
