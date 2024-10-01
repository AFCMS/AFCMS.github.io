import React, { Fragment, useRef } from "react";
import { Dialog, DialogBackdrop, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type PopupProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	content: React.ReactNode;
};

const Popup = (props: PopupProps) => {
	const open = props.open;
	const setOpen = props.setOpen;
	const cancelButtonRef = useRef(null);

	return (
		<Transition show={open} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
				<div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</TransitionChild>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
						&#8203;
					</span>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="relative inline-block w-auto transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle">
							<div className="bg-white p-4">
								{props.title ? (
									<DialogTitle as="h3" className="h-8 text-lg font-medium leading-6 text-gray-900">
										{props.title}
									</DialogTitle>
								) : undefined}
								<button
									type="button"
									className="fixed right-6 top-5 h-8 w-8 appearance-none overflow-y-auto rounded-md border border-transparent text-base font-medium text-white"
									onClick={() => setOpen(false)}
								>
									<XMarkIcon className="h-full w-full" />
								</button>
								{props.content}
							</div>
						</div>
					</TransitionChild>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Popup;
