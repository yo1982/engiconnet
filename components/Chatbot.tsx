
import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { ChatMessage } from '../types';
import { getBotResponse } from '../services/geminiService';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setMessages([
                { id: 'initial', text: 'Hello! I am the EngiConnect assistant. How can I help you today?', sender: 'bot' }
            ]);
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
        };
        const loadingMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            text: '...',
            sender: 'bot',
            isLoading: true,
        };

        setMessages(prev => [...prev, userMessage, loadingMessage]);
        setInput('');

        const botResponseText = await getBotResponse(input);

        const botMessage: ChatMessage = {
            id: (Date.now() + 2).toString(),
            text: botResponseText,
            sender: 'bot',
        };

        setMessages(prev => [...prev.slice(0, -1), botMessage]);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-brand-secondary transition-transform transform hover:scale-110 focus:outline-none z-50"
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <XMarkIcon className="h-8 w-8" /> : <ChatBubbleLeftRightIcon className="h-8 w-8" />}
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in-up">
                    <header className="bg-brand-primary p-4 text-white rounded-t-lg flex justify-between items-center">
                        <h3 className="font-bold">EngiConnect Assistant</h3>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                    msg.sender === 'user' ? 'bg-brand-secondary text-white' : 'bg-gray-200 text-brand-dark'
                                }`}>
                                    {msg.isLoading ? (
                                        <div className="flex items-center space-x-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                        </div>
                                    ) : (
                                        <p className="text-sm">{msg.text}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                         <div ref={messagesEndRef} />
                    </div>
                    <div className="p-4 border-t bg-white flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask a question..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                        />
                        <button onClick={handleSend} className="ml-3 p-3 bg-brand-secondary text-white rounded-full hover:bg-blue-600 focus:outline-none">
                            <PaperAirplaneIcon className="h-5 w-5"/>
                        </button>
                    </div>
                </div>
            )}
            <style>{`
                .animate-fade-in-up {
                    animation: fadeInUp 0.3s ease-out;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .delay-75 { animation-delay: 75ms; }
                .delay-150 { animation-delay: 150ms; }
            `}</style>
        </>
    );
};

export default Chatbot;
