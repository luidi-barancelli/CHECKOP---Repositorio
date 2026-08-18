import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter no mínimo 2 caracteres.'),
  email: z.string().trim().toLowerCase().email('E-mail inválido.'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres.'),
  // "role" NAO pode vir do frente, jamais!
  // 
  //  caso precise, faca aqui
  // role: z.enum(['DEV', 'QA', 'PENTESTER', 'STUDENT']).optional(),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('E-mail inválido.'),
  password: z.string().min(1, 'Senha é obrigatória.'),
});