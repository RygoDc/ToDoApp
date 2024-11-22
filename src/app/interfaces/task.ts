export interface Task {
    id: number;
    name: string;
    description: string;    
    date: string;
    status: 'pendiente' | 'completada';
}
