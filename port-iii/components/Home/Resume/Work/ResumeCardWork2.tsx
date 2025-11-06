import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    role:string;
    Icon:IconType;
    date?:string;
}

const ResumeCardWork2  = ({Icon, role, date}: Props) => {
  return (
    <div className="mb-6">
        <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-mb">
            <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col">
                <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white"/>
            </div>
            <div className="flex-1">
                {date && (
                    <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold">
                        {date}
                    </h1>
                )}
                <h1 className="text-gray-200 text-lx sm:text-2xl font-semibold">
                    {role}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base">
                    O site foi desenvolvido para gerenciar o horário do usuário, suas tarefas e compromissos, além de registrar o seu estado emocional diário, fornecer a previsão do tempo e muito mais. Com o objetivo de funcionar como um diário e uma agenda inteligente, ele acompanha e registra, a cada dia, as atividades realizadas e as emoções vivenciadas pelo usuário.

                </p>
            </div>
        </div>
    </div>
  )
}

export default ResumeCardWork2;