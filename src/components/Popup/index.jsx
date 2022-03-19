import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const Popup = (props) => {
	const open = props.open;
	const setOpen = props.setOpen;
	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:h-screen sm:align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
							<div className="bg-white p-4">
								<div className="flex flex-row items-start">
									<Dialog.Title
										as="h3"
										className="h-8 grow-0 text-lg font-medium leading-6 text-gray-900"
									>
										{props.title}
									</Dialog.Title>
									<div className="h-8 flex-grow"></div>
									<button
										type="button"
										className="h-8 w-8 flex-grow-0 rounded-md border border-transparent bg-blue-300 text-base font-medium text-white"
										onClick={() => setOpen(false)}
									>
										<XIcon />
									</button>
								</div>
								{props.content}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Popup;
