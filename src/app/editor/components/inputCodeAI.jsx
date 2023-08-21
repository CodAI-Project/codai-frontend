'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Textarea, Button } from "@nextui-org/react";
import { LuSend } from 'react-icons/lu'
import SelectCustom from './selectCustom';
import { Formik, Form, Field } from 'formik';

const options = [
    { value: "sushi", label: "Sushi" },
    { value: "blueCheese", label: "Blue cheese with crackers" },
    { value: "steak", label: "Steak" },
    { value: "other", label: "Other" }
];

const InputCodeAI = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isTextareaFilled, setIsTextareaFilled] = useState(false);
    const textareaRef = useRef(null);
    const [currentSelectValue, setCurrentSelectValue] = useState("");

    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, 4 * 24);
        textarea.style.height = `${newHeight}px`;

        setIsTextareaFilled(textarea.value.trim().length > 0);
    }, [isFocused, isTextareaFilled]);

    const handleSelectChange = (selectedValue) => {
        setCurrentSelectValue(selectedValue);
    };

    const handleTextareaInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, 4 * 24);
        textarea.style.height = `${newHeight}px`;

        setIsTextareaFilled(textarea.value.trim().length > 0);
    };

    return (
        <Formik
            initialValues={{ message: '', selectValue: '' }}
            onSubmit={(values, { resetForm }) => {
                console.log('Message:', values.message);
                console.log('Select Value:', currentSelectValue);
                setIsTextareaFilled(false)
                resetForm();
            }}
        >
            <Form>
                <div className={`relative  transition-colors duration-300 `}>
                    <div className="flex items-center justify-between gap-6 p-2 px-4">
                        <div className="flex items-center space-x-2">
                            <Field name="selectValue">
                                {({ field }) => <SelectCustom options={options} onSelectChange={handleSelectChange} {...field} />}
                            </Field>
                        </div>
                        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                            <div className={`flex flex-col ${isFocused ? ' bg-blackcodai-900' : ''} transition-colors hover:bg-blackcodai-900 bg w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border  dark:border-gray-900/50 bg-blackcodai-950 rounded-xl shadow-xs dark:shadow-xs`}>
                                <div className="flex items-center space-x-2">
                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        rows="1"
                                        placeholder="Descreva com precisão o que precisa"
                                        className={`m-0 w-full resize-none border-0 bg-transparent p-0 pr-10  pl-3 md:pl-0 outline-none `}
                                        style={{ maxHeight: "200px", height: "auto", overflowY: "hidden" }}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        innerRef={textareaRef}
                                        onInput={handleTextareaInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <Button
                            className={` disabled:opacity-40`}
                            style={{}}
                            isIconOnly
                            isDisabled={!isTextareaFilled}
                            type="submit"
                        >
                            <LuSend />
                        </Button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default InputCodeAI;
