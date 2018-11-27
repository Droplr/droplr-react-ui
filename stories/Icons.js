import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AddPeopleIcon,
  AddToBoardIcon,
  AllItemsIcon,
  ArrowIcon,
  BellIcon,
  BinocularsIcon,
  BoardIcon,
  CameraIcon,
  CheckIcon,
  ChevronLeftIcon,
  ClipboardIcon,
  CloneCompleteIcon,
  CloudUploadIcon,
  CloudUploadBoldIcon,
  CommentIcon,
  CopyIcon,
  CreateBoardIcon,
  CrossIcon,
  DestructIcon,
  DetachIcon,
  DisableIcon,
  DotsIcon,
  DownIcon,
  DownloadIcon,
  DropdownIcon,
  DropdownArrowIcon,
  EnableIcon,
  ErrorIcon,
  ExpireTimeIcon,
  FolderIcon,
  GearIcon,
  ImageIcon,
  InfoIcon,
  KeyIcon,
  LogoutIcon,
  MailIcon,
  MoveIcon,
  NewWindowIcon,
  NotesIcon,
  NotesBoldIcon,
  OthersIcon,
  PadlockIcon,
  PadlockBoldIcon,
  PadlockLockIcon,
  PadlockLockOutlineIcon,
  PadlockUnlockIcon,
  PadlockUnlockOutlineIcon,
  PenIcon,
  PrivateIcon,
  ProfileIcon,
  PublicIcon,
  PublicFolderIcon,
  RemoveTagIcon,
  SearchIcon,
  SearchBoldIcon,
  SendIcon,
  ShareIcon,
  SharedIcon,
  StarIcon,
  TagFilledIcon,
  TagsIcon,
  TeamIcon,
  TrashBinIcon,
  UpIcon,
  UploadIcon,
  UrlIcon,
  VerticalDotsIcon,
  ViewGridIcon,
  ViewListIcon,
  WalletIcon,
  WarningIcon,
  WatchFolderIcon,
  ZoomCloseIcon,
  ZoomInIcon,
  ZoomOutIcon,
  ZoomResetIcon,
} from '../src/components/icons';

const IconsDecorator = (storyFn) => (
  <div className="iconsWrapper">
    {storyFn()}
    <style jsx global>{`
      .iconsWrapper svg {
        margin: 12px;
      }
    `}</style>
  </div>
);

storiesOf('Icons', module)
  .addDecorator(IconsDecorator)
  .addWithJSX('All icons', () => (
    <>
      <AddPeopleIcon />
      <AddToBoardIcon />
      <AllItemsIcon />
      <ArrowIcon />
      <BellIcon />
      <BinocularsIcon />
      <BoardIcon />
      <CameraIcon />
      <CheckIcon />
      <ChevronLeftIcon />
      <ClipboardIcon />
      <CloneCompleteIcon />
      <CloudUploadIcon />
      <CloudUploadBoldIcon />
      <CommentIcon />
      <CopyIcon />
      <CreateBoardIcon />
      <CrossIcon />
      <DestructIcon />
      <DetachIcon />
      <DisableIcon />
      <DotsIcon />
      <DownIcon />
      <DownloadIcon />
      <DropdownIcon />
      <DropdownArrowIcon />
      <EnableIcon />
      <ErrorIcon />
      <ExpireTimeIcon />
      <FolderIcon />
      <GearIcon />
      <ImageIcon />
      <InfoIcon />
      <KeyIcon />
      <LogoutIcon />
      <MailIcon />
      <MoveIcon />
      <NewWindowIcon />
      <NotesIcon />
      <NotesBoldIcon />
      <OthersIcon />
      <PadlockIcon />
      <PadlockBoldIcon />
      <PadlockLockIcon />
      <PadlockLockOutlineIcon />
      <PadlockUnlockIcon />
      <PadlockUnlockOutlineIcon />
      <PenIcon />
      <PrivateIcon />
      <ProfileIcon />
      <PublicIcon />
      <PublicFolderIcon />
      <RemoveTagIcon />
      <SearchIcon />
      <SearchBoldIcon />
      <SendIcon />
      <ShareIcon />
      <SharedIcon />
      <StarIcon />
      <TagFilledIcon />
      <TagsIcon />
      <TeamIcon />
      <TrashBinIcon />
      <UpIcon />
      <UploadIcon />
      <UrlIcon />
      <VerticalDotsIcon />
      <ViewGridIcon />
      <ViewListIcon />
      <WalletIcon />
      <WarningIcon />
      <WatchFolderIcon />
      <ZoomCloseIcon />
      <ZoomInIcon />
      <ZoomOutIcon />
      <ZoomResetIcon />
    </>
  ))
