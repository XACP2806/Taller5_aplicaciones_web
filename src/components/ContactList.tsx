import type { Contact } from '../types/contact';
import ContactRow from './ContactRow';

const contacts: Contact[] = [
    { id: 1, name: 'Maria Lopez', email: 'maria.lopez@example.com' },
    { id: 2, name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 3, name: 'Ana García', email: 'ana.garcia@example.com' }
];

function ContactList() {
    return (
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;