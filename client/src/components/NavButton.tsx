import React from "react"

interface NavButtonProps {
    name: string;
    href: string;
    current: boolean;
    className: any;
}

export default function NavButton(props: NavButtonProps) {
    return (
        <a
                        key={props.name}
                        href={props.href}
                        className={props.className(
                            props.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={props.current ? 'page' : undefined}
                      >
                        {props.name}
                      </a>
    )
}